import React, { useState } from "react";

const CommentAdder = ({ setComments }) => {
  const [newComment, setNewComment] = useState("");
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setComments((currComments) => {
            const newComments = [...currComments];
            newComments.push({ body: newComment, author: "username" });
            return newComments;
          });
        }}
      >
        <label htmlFor="new-comment">Add comment: </label>
        <input
          id="new-comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        ></input>
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default CommentAdder;
