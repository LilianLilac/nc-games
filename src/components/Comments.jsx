import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReviewId } from "../utils/api";

const Comments = () => {
  const [comment, setComment] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComment(commentsFromApi);
    });
  }, [review_id]);

  return (
    <main className="Comments">
      <h1>{comment.body}</h1>
      <p>Author: {comment.author}</p>
      <p>{comment.created_at}</p>
      <p>👍 {comment.votes}</p>
    </main>
  );
};

export default Comments;
