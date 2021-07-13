import React, { useState } from "react";
import { patchReviewVotes } from "../utils/api";

const VoteOnReview = ({ votes, review_id }) => {
  const [votesChange, setVotesChange] = useState(0);
  const [hasError, setHasError] = useState(false);

  const incVotes = () => {
    setHasError(false);
    setVotesChange((currVotesChange) => {
      return currVotesChange + 1;
    });
    patchReviewVotes(review_id, 1).catch((err) => {
      setHasError(true);
      setVotesChange(0);
    });
  };

  return (
    <section>
      <p>👍 Votes: {votes + votesChange}</p>
      {hasError && <p>Something's gone wrong!</p>}
      <button disabled={votesChange > 0} onClick={incVotes}>
        Vote!
      </button>
    </section>
  );
};

export default VoteOnReview;
