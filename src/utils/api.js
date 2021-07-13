import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-monika.herokuapp.com/api",
});

// export const getReviews = () => {
//   reviewsApi.get("/reviews").then((response) => {
//     console.log(response.data);
//   });
// };

export const getReviews = async () => {
  const { data } = await reviewsApi.get("/reviews");
  return data.reviews;
};

export const getSingleReview = async (review_id) => {
  const { data } = await reviewsApi.get(`/reviews/${review_id}`);
  return data.review;
};
