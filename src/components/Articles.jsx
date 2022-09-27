import axios from "axios";
import { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ncnewsyk.herokuapp.com/api/articles`)
      .then(({ data: { articles } }) => {
        setArticles(articles);
      });
  }, []);
  

  return (
    <main>
      <ul>
        <h2>Today's Articles</h2>
        {articles.map((article) => {
          //console.log(article);
          return (
            <div key={article.topic}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
