import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../CSS/Articles.css";

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
      .catch((err) => {});
  }, [topic]);

  return (
    <main className="allArticles px-20 border-solid ">
     
      <ul> 
        <h2 className="text-2xl p-10 rounded-lg ">Today's Articles</h2>
        {articles.map((article) => {
          return (
            <div className="p-8" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h3 className="text-2xl bg-yellow-500 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 py-5 rounded-md  ">
                  {article.title}
                </h3>
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
