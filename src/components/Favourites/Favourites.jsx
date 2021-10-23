import React, {useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
// import { AiOutlineHeart } from "react-icons/ai";
import { removeFavMovie } from "../../features/FavouriteSlice";

import "./Favourites.scss";
const Favourites = () => {
  const dispatch = useDispatch();
  // const [favMovies,setFavMovies] = useState([]);
  const favMovies = useSelector((state) => state.favMovies.movies);
  const favRemoveHandler = (e) => {
    dispatch(removeFavMovie(e.target.value));
    // console.log(e.target.value);
  };
  useEffect(() => {

  }, [favMovies,useSelector]);
  if (favMovies){
    
  }
  return (
    <div className="favourite-section">
      {favMovies.map((movie) => {
        return (
          <div className="fav-movie-item">
            <MovieItem
              key={movie.imdbID}
              Title={movie.Title}
              Year={movie.Year}
              imdbID={movie.imdbID}
              Poster={movie.Poster}
            />
            <button
              key={movie.imdbID + 1}
              className="remove-fav-btn"
              value={movie.imdbID}
              onClick={favRemoveHandler}
            >
              {/* <AiOutlineHeart size = {24} color = '#B61010'/> */}
              <span>Remove from favourite</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Favourites;
