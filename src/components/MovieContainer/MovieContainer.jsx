import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { useSelector} from "react-redux";
import "./MovieContainer.scss";
const MovieContainer = () => {
  const allMovies = useSelector((state) => state.searchMovies.movies);
  // console.log(allMovies);
  return (
    <div className="movie-container">
      {allMovies.map((movie) => {
        return <MovieItem key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
};

export default MovieContainer;
