import React from "react";
import { Link } from "react-router-dom";
import "./MovieItem.scss";
const MovieItem = ({ Poster, Title, Year,imdbID }) => {
  // const bgImage = {
  //    width: "100%",
  //    backgroundImage: `url(${Poster})`,
  //    backgroundSize: "cover",
  //    backgroundPosition: "center",
  //  };
  return (
    <Link to={`/movie/${imdbID}`} className="movie-item">
      {/* <div className="poster-image" style={bgImage}></div> */}
      <img src={Poster} alt={Title} className="image-poster" />
      <div className="movie-details">
        <span className="title">{Title}</span>
        <span className="year">{Year}</span>
      </div>
    </Link>
  );
};

export default MovieItem;
