import axios from "axios";
import { useState } from "react";

const Vote = ({ article }) => {
  const [toggle, setToggle] = useState(false);
  const [votes, setVotes] = useState(0);

  const handleClick = () => {
    setToggle(!toggle);
    let voteValue = 0;
    if (toggle) {
      voteValue = -1;
    } else {
      voteValue = 1;
    }
    setVotes((vote) => voteValue + vote);
    console.log(votes);
    console.log(article.votes, "article votes");
    axios
      .patch(
        `https://ncnewsyk.herokuapp.com/api/articles/${article.article_id}`,
        { inc_votes: voteValue }
      )
      .then(({ data }) => {
        console.log("api done");
      });
  };

  return (
    <div>
      <button
        className="voteBtn"
        onClick={() => {
          handleClick();
        }}
      >
        {votes + article.votes} vote
      </button>
    </div>
  );
};
export default Vote;
