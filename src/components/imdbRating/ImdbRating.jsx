import React from "react";
import "./imdbRating.scss";
import { BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";


const ImdbRating = ({ rating, votes }) => {
  const ratingWhole = Array.from(Array(Math.round(rating)).keys());
  const adhaRating = rating - Math.round(rating);
  const ratingLeft = Array.from(Array(10 - Math.floor(rating)).keys());
  // {ratingWhole}
  // <br/>
  // {adhaRating}
  // <br/>
  // {rating}
  // <br/>
  // {ratingLeft}
  return (
    <div className="imdb-rating">
      <div className="rating-star-container">
        {ratingWhole.map((star, id) => (
          <BsStarFill size = {18} color = '#DBAC35' key={id} />
        ))}
        {adhaRating > 0 ? <BsStarHalf size = {18} color = '#DBAC35'/> : ""}
        {ratingLeft.map((star, id) => (
          <BsStar size = {18} color = '#DBAC35'key = {id}/>
        ))}
      </div>
      <div className = 'rating-vote'>
         <span className = 'rating'>{rating} / 10</span>
         <span className="votes">({votes})</span>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png" alt="" className = 'imdbLogo'/>
    </div>
  );
};

export default ImdbRating;
