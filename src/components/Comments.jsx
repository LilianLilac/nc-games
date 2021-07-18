import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReviewId } from "../utils/api";

const Comments = (props) => {
  const { review_id } = useParams();
  const setComments = props.setComments;
  const comments = props.comments;

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id, setComments]);

  return (
    <main className="Comments">
      {comments.map((comment) => {
        return (
          <section key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>👍 {comment.votes}</p>
          </section>
        );
      })}
    </main>
  );
};

export default Comments;
