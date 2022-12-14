import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`https://ncnewsyk.herokuapp.com/api/articles/${article_id}`)
      .then(({ data: { article } }) => {
        console.log(article);
        setArticle(article);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [article_id]);
  if (notFound) {
    return <p>404 not found</p>;
  }

  return (
    <div>
      <h2>topic:{article.topic}</h2>
      <h3> {article.title}</h3>
      <p>{article.body}</p>
      <p>author: {article.author}</p>
      <p>date: {article.created_at}</p>
    </div>
  );
};

export default Article;
