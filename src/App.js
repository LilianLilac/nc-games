import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeader from "./components/NavHeader";
import Home from "./components/Home";
import Categories from "./components/Categories";
import SingleReview from "./components/SingleReview";
import Comments from "./components/Comments";
import ReviewsByCat from "./components/ReviewsByCat";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/reviews">
            <Home />
          </Route>
          <Route exact path="/reviews/:review_id">
            <SingleReview />
          </Route>
          <Route exact path="/reviews/:review_id/comments">
            <Comments />
          </Route>
          <Route exact path="/reviews/category/:category_name">
            <ReviewsByCat />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
