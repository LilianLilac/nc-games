import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";
import Comments from "./Comments";
import VoteOnReview from "./VoteOnReview";
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
      <p>
        <VoteOnReview votes={review.votes} review_id={review.review_id} />
      </p>
      <p>Category: {review.category}</p>
      <p>{review.created_at}</p>
      <section>
        <p>Comments: {review.comment_count}</p>
        <Expandable>
          <Comments />
        </Expandable>
      </section>
      <Image className="Review_img" src={review.review_img_url} fluid></Image>
    </main>
  );
};

const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };
  return (
    <div>
      <button onClick={toggleIsOpen}>{isOpen ? "Close" : "Open"}</button>
      {isOpen ? children : null}
    </div>
  );
};

export default SingleReview;
