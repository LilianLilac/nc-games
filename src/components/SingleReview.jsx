import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";
import Image from "react-bootstrap/Image";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    getSingleReview(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, [review_id]);

  return (
    <main className="Review">
      <h1>{review.title}</h1>
      <p>{review.review_body}</p>
      <p>Owner: {review.owner}</p>
      <p>👍 {review.votes}</p>
      <p>Category: {review.category}</p>
      <p>{review.created_at}</p>
      <p>Comments: {review.comment_count}</p>
      <Image className="Review_img" src={review.review_img_url} fluid></Image>
    </main>
  );
};

export default SingleReview;
