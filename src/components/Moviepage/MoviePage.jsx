import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFavMovies } from "../../features/FavouriteSlice";
import ImdbRating from "../imdbRating/ImdbRating";
import RtAndMetactitic from "../RtAndMetacritic/RtAndMetactitic";
import { AiFillHeart } from "react-icons/ai";
import "./MoviePge.scss";
import movieApi from "../../api/movieApi";
const apiKey = "6e6f66eb";
export const MoviePage = (props) => {
  const [movie, setMovie] = useState();
  const dispatch = useDispatch();
  const fetchMovies = async (imdbID) => {
    const response = await movieApi
      .get(`?i=${imdbID}&plot=full&apikey=${apiKey}`)
      .catch((err) => {
        console.log("error", err);
      });
    return response.data;
  };
  useEffect(() => {
    fetchMovies(props.match.params.imdbID).then((response) =>
      setMovie(response)
    );
  }, [props]);
  const addFavHandler = () => {
    fetchMovies(props.match.params.imdbID).then((response) =>
      dispatch(addFavMovies(response))
    );
  };
  if (movie) {
    return (
      <div className="movie-page-container">
        <div className="movie-poster">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="movie-info">
          <span className="title">{movie.Title}</span>
          <div className="review-section">
            <ImdbRating rating={movie.imdbRating} votes={movie.imdbVotes} />
            <RtAndMetactitic rating={movie.Ratings} />
          </div>
          <section className="other-info">
            {movie.Year && <span>{movie.Year}</span>}
            {movie.Genre && <span>{movie.Genre}</span>}
            {movie.Rated && <span>{movie.Rated}</span>}
            {movie.Runtime && <span>{movie.Runtime}</span>}
          </section>
          <div className="director">
            Director : <span> {movie.Director}</span>
          </div>
          <div className="actors">
            Starring : <span> {movie.Actors}</span>
          </div>
          <div className="plot">
            Plot : <span> {movie.Plot}</span>
          </div>
          <button className="addtofav-btn" onClick={addFavHandler}>
            <AiFillHeart color="#B61010" size={24} />
            <span>Add to favourites</span>
          </button>
        </div>
      </div>
    );
  } else {
    return "Loading";
  }
};
