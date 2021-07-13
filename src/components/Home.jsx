import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      console.log(reviewsFromApi);
    });
  }, []);

  return (
    <main className="Home">
      <h1>Reviews</h1>
      {reviews.map((review) => {
        return (
          <p key={review.review_id} className="Reviews_list">
            <Card style={{ maxwidth: "10rem" }}>
              <Card.Img
                variant="top"
                src={review.review_img_url}
                className="Card_img"
              />
              <Card.Body>
                <Card.Title>{review.title}</Card.Title>
                <Card.Text>{review.created_at}</Card.Text>
                <Card.Text>👍 {review.votes}</Card.Text>
                <Card.Text>{review.comment_count}</Card.Text>
                <Link to={`/reviews/${review.review_id}`}>Read more</Link>
              </Card.Body>
            </Card>
          </p>
        );
      })}
    </main>
  );
};

export default Home;

/* <li key={review.review_id}>
  <Link to={`/reviews/${review.review_id}`} className="Reviews_link">
    <h2>{review.title}</h2>
    <img className="Review_img_url" src={review.review_img_url} alt={""}></img>
  </Link>
</li>; */
