import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeader from "./components/NavHeader";
import Home from "./components/Home";
import Categories from "./components/Categories";
import SingleReview from "./components/SingleReview";
import Comments from "./components/Comments";
import ReviewsByCat from "./components/ReviewsByCat";
import { UserContext } from "./contexts/User";
// import UserProfile from "./components/UserProfile";

const App = () => {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <NavHeader />
          {/* <UserProfile /> */}
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
            <Route exact path="/reviews/category/:category">
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
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
