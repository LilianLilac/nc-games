import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCat } from "../utils/api";
import Card from "react-bootstrap/Card";

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
    <main className="Reviews_by_cat">
      <h1>{`${category} reviews`}</h1>
      {reviews.map((review) => {
        return (
          <p key={review.review_id} className="Reviews_list">
            <Card style={{ maxwidth: "10rem" }}>
              <Card.Body>
                <Card.Title>{review.title}</Card.Title>
                <Card.Text>{review.review_body}</Card.Text>
                <Card.Text>Author: {review.owner}</Card.Text>
              </Card.Body>
              <Card.Img
                variant="top"
                src={review.review_img_url}
                className="Card_img"
              />
            </Card>
          </p>
        );
      })}
    </main>
  );
};

export default ReviewsByCat;
