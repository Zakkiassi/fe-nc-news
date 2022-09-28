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
              <p>{article.body}</p>
              <p>{article.topic}</p>
            </div>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
