import React, { useState } from "react";
import { patchReviewVotes } from "../utils/api";

const VoteOnReview = ({ votes, review_id }) => {
  const [votesChange, setVotesChange] = useState(0);

  const incVotes = () => {
    patchReviewVotes(votes, review_id).then(() => {
      setVotesChange((currVotesChange) => {
        return currVotesChange + 1;
      });
    });
  };

  return (
    <section>
      <p>Votes: {votes}</p>
      <button onClick={incVotes}>Vote!</button>
    </section>
  );
};

export default VoteOnReview;
