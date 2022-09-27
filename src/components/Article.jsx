import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    axios.get(`https://ncnewsyk.herokuapp.com/api/articles/${article_id}`).then(
      ({ data: { article } }) => {
        setArticle(article);
      },
      [article_id]
    );
  });
  console.log(article);
  return (
    <div>
      <h2>topic:{article.topic}</h2>
      <h3> {article.title}</h3>
      <p>{article.body}</p>
      <p>authot: {article.author}</p>
    </div>
  );
};

export default Article;
