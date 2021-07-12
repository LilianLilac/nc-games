import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-monika.herokuapp.com/api",
});

export const getReviews = () => {
  reviewsApi.get("/reviews").then((response) => {
    console.log(response.data);
  });
};
