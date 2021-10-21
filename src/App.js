import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MovieContainer from "./components/MovieContainer/MovieContainer";
function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <MovieContainer/>
    </div>
    </Router>
  );
}

export default App;
