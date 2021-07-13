import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReviewId } from "../utils/api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  return (
    <main className="Comments">
      <ul>
        {comments.map((comment) => {
          return (
            <section key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>Author: {comment.author}</p>
              <p>{comment.created_at}</p>
              <p>👍 {comment.votes}</p>
            </section>
          );
        })}
      </ul>
    </main>
  );
};

export default Comments;
