import React, { useState } from "react";
import { postNewComment } from "../utils/api";

const CommentAdder = ({ setComments }) => {
  const [newCommentBody, setNewCommentBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
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
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default CommentAdder;
