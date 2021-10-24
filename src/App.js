import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MovieContainer from "./components/MovieContainer/MovieContainer";
import { MoviePage } from "./components/Moviepage/MoviePage";
import Favourites from "./components/Favourites/Favourites";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" component={MovieContainer} exact />
          <Route path="/movie/:imdbID" component={MoviePage} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
