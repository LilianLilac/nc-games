import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";

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
      <img
        className="Review_img"
        src={review.review_img_url}
        alt={review.title}
      ></img>
      <p>{review.review_body}</p>
      <p>Designer: {review.designer}£</p>
    </main>
  );
};

export default SingleReview;
