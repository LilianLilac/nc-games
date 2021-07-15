import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCat } from "../utils/api";

const ReviewsByCat = () => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getReviewsByCat(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category]);
  console.log(category);

  return (
    <div className="Reviews">
      <h2>{`${category} reviews`}</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h3>{review.title}</h3>
              <p>{review.review_body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsByCat;
