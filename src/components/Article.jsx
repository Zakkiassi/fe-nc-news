import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Vote from "./votes";
import "../CSS/article.css";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`https://ncnewsyk.herokuapp.com/api/articles/${article_id}`)
      .then(({ data: { article } }) => {
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
    <main className="topic">
      <h2 className=" text-2xl py-2 pb-10 rounded-lg">
        topic:{article.topic}
      </h2>
      <div className="article">
        <h3 className="p-5 text-xl bg-yellow-500 rounded-lg ">
          {" "}
          {article.title}
        </h3>
        <div className="">
          <p className="p-10 border-solid border-2 ">{article.body}</p>
          <p>author: {article.author}</p>
          <p>date: {article.created_at}</p>

          <Vote article={article} />
        </div>
      </div>
    </main>
  );
};

export default Article;
