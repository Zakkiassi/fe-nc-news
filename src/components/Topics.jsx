import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/topics.css";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ncnewsyk.herokuapp.com/api/topics`)
      .then(({ data: { topics } }) => {
        setTopics(topics);
      });
  }, []);

  return (
    <main className="main">
      <h2 className="text-2xl py-2 pb-10 ">Today's Topics</h2>
      <div className="topics">
        {topics.map((topic) => {
          console.log(topic);
          return (
            <div className="px-60 py-10">
            <div  key={topic.slug}>
              <Link to={`/topics/${topic.slug}`}>
                <h3 className="text-xl bg-yellow-500 hover:bg-sky-700  ">{topic.slug}</h3>
              </Link>
              <p>{topic.description}</p>
            </div>
            </div>
          );
        })}
        <div className="allarticles">
          <Link to={"/articles"}>
            <p>View all articles</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Topics;
