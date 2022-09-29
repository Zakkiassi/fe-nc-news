import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <main>
      <ul>
        <h2>Today's Topics</h2>

        {topics.map((topic) => {
          console.log(topic);
          return (
            <div key={topic.slug}>
              <Link to={`/topics/${topic.slug}`}>
                <h3>{topic.slug}</h3>
              </Link>
              <p>{topic.description}</p>
            </div>
          );
        })}
        <Link to={"/articles"}>
          <p>View all articles</p>
        </Link>
      </ul>
    </main>
  );
};

export default Topics;
