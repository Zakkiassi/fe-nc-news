import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    axios
      .get(`https://ncnewsyk.herokuapp.com/api/articles`, {
        params: { topic: topic },
      })
      .then(({ data: { articles } }) => {
        setArticles(articles);
      })
      .catch((err) => {
        
      });
  }, [topic]);

  return (
    <main>
      <ul>
        <h2>Today's Articles</h2>
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
              </Link>
              <p> author: {article.author}</p>
              <p>topic: {article.topic}</p>
              <p>
                votes: {article.votes} comments: {article.comment_count}
              </p>
            </div>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
