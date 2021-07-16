import React, { useState } from "react";
import { postNewComment } from "../utils/api";
import { useParams } from "react-router-dom";

const CommentAdder = ({ setComments }) => {
  const [newCommentBody, setNewCommentBody] = useState("");
  const { review_id } = useParams();
  const [errMessage, setErrMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      username: "jessjelly",
      body: newCommentBody,
    };
    if (newComment.body.length < 3) {
      setErrMessage("Comment too short!");
    } else {
      postNewComment(review_id, newComment).then((newComment) => {
        setComments((currComments) => {
          const newComments = [newComment, ...currComments];
          return newComments;
        });
      });
      // .catch((err) => {
      //   console.log(err.response.data);
      //   setErrMessage("Something went wrong..");
      // });
    }
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
        {errMessage ? <p>{errMessage}</p> : null}
        <button>Post</button>
      </form>
    </div>
  );
};

export default CommentAdder;
