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

export const getCommentsByReviewId = async (review_id) => {
  const { data } = await reviewsApi.get(`/reviews/${review_id}/comments`);
  return data.comments;
};

// export const patchReviewVotes = async(review_id, increment) => {
//     const { data } = await reviewsApi.patch(`/reviews/${review_id}`), {inc_votes: increment}
//     return data.review;
// }

export const patchReviewVotes = (review_id, increment) => {
  return axios
    .patch(`https://nc-games-monika.herokuapp.com/api/reviews/${review_id}`, {
      incVotes: increment,
    })
    .then((response) => {
      console.log(response.data);
    });
};
