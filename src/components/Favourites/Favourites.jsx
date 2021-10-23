import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
// import { addFavMovies } from "../../features/FavouriteSlice";

import "./Favourites.scss";
const Favourites = () => {
  const favMovies = useSelector((state) => state.favMovies.movies);
  return (
    <div className="favourite-section">
      {favMovies.map((movie) => {
        return (
          <div className = 'fav-movie-item'>
            <MovieItem
              key={movie.imdbID}
              Title={movie.Title}
              Year={movie.Year}
              imdbID={movie.imdbID}
              Poster={movie.Poster}
            />
            <button className="remove-fav-btn">Remove from favouite</button>
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
