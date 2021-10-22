import React, { useEffect, useState } from "react";
import "./MoviePge.scss";
import movieApi from "../../api/movieApi";
const apiKey = "6e6f66eb";
export const MoviePage = (props) => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchMovies = async (imdbID) => {
      const response = await movieApi
        .get(`?i=${imdbID}&plot=full&apikey=${apiKey}`)
        .catch((err) => {
          console.log("error", err);
        });
      return response.data;
    };
    fetchMovies(props.match.params.imdbID).then((response) => setMovie(response));
  }, []);
  return (
    <div className="movie-page-container">
      {JSON.stringify(movie)}
      {movie && console.log(movie.Title)}
    </div>
  );
};
