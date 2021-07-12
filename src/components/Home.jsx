import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <main className="Home">
      <h1>Reviews:</h1>
      {reviews.map((review) => {
        return (
          <li key={review.review_id}>
            <Link to={`/reviews/${review.review_id}`} className="Reviews_link">
              <h2>{review.title}</h2>
              <img
                className="Review_img_url"
                src={review.review_img_url}
                alt={""}
              ></img>
            </Link>
          </li>
        );
      })}
    </main>
  );
};

export default Home;
