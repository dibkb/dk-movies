import React, { useEffect } from "react";
import movieApi from "../../api/movieApi";
import "./MovieContainer.scss";
const apiKey = "6e6f66eb";
const MovieContainer = () => {
  const search = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?s=${search}&apikey=${apiKey}`)
        .catch((err) => {
          console.log("error", err);
        });
      console.log(response.data);
    };
    fetchMovies();
  }, []);
  return <div className="movie-container"></div>;
};

export default MovieContainer;
