import React, { useState } from "react";
import { postNewComment } from "../utils/api";
import { useParams } from "react-router-dom";

const CommentAdder = ({ setComments }) => {
  const [newCommentBody, setNewCommentBody] = useState("");
  const { review_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      username: "jessjelly",
      comment: newCommentBody,
    };
    console.log("posted");
    postNewComment(review_id, newComment).then((newComment) => {
      setComments((currComments) => {
        const newComments = [newComment, ...currComments];
        console.log(newComments);
        return newComments;
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add a comment:
          <textarea
            value={newCommentBody}
            onChange={(event) => setNewCommentBody(event.target.value)}
          ></textarea>
        </label>
        <button>Post</button>
      </form>
    </div>
  );
};

export default CommentAdder;
