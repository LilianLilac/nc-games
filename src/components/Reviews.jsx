import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category]);

  return (
    <div className="Reviews">
      <h2>{category ? `${category} reviews` : `all reviews`}</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h3>{review.title}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
