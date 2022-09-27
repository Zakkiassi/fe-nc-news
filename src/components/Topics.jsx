import axios from "axios";
import { useEffect, useState } from "react";

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
              <h3>{topic.slug}</h3>
              <p>{topic.description}</p>
            </div>
          );
        })}
      </ul>
    </main>
  );
};

export default Topics;
