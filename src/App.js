import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeader from "./components/NavHeader";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import Categories from "./components/Categories";

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
            <Reviews />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
