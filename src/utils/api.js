import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-monika.herokuapp.com/api",
});

export const getReviews = async (category, sort_by) => {
  const { data } = await reviewsApi.get("/reviews", {
    params: {
      category: category,
      order: "asc",
      sort_by: sort_by,
    },
  });
  return data.reviews;
};

export const getSingleReview = async (review_id) => {
  const { data } = await reviewsApi.get(`/reviews/${review_id}`);
  return data.review;
};

export const getCommentsByReviewId = async (review_id) => {
  const { data } = await reviewsApi.get(`/reviews/${review_id}/comments`);
  console.log(data.comments);
  return data.comments;
};

export const getCategories = async () => {
  const { data } = await reviewsApi.get("/categories");
  return data.categories;
};

export const getReviewsByCat = async (category) => {
  const { data } = await reviewsApi.get(`/reviews?category=${category}`);
  return data.reviews;
};

export const patchReviewVotes = (review_id, increment) => {
  return axios
    .patch(`https://nc-games-monika.herokuapp.com/api/reviews/${review_id}`, {
      inc_votes: increment,
    })
    .then((response) => {});
};

export const postNewComment = async (review_id, newComment) => {
  const { data } = await reviewsApi.post(
    `/reviews/${review_id}/comments`,
    newComment
  );
  console.log(data.comment);
  return data.comment;
};
