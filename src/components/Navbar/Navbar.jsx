import React from "react";
import { Link } from "react-router-dom";
import { GiSharpedTeethSkull } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import "./Navbar.scss";
import SearchField from "../SearchField/SearchField";
const Navbar = () => {
  let iconStyles = {
    background: "transparent",
    fontSize: "2rem",
    color: "#DEC79D",
  };
  return (
    <div className="navbar-container">
      <Link to="/" className="brand-container">
        <GiSharpedTeethSkull style={iconStyles} />
        <span className="brand">DK movies</span>
      </Link>
      <div className="search-container">
        <SearchField />
      </div>
      <div className="right-side">
        <Link to="/" className="home-link">
          Home
        </Link>
        <Link to="/favourites" className="fav-link">
          <AiFillHeart color="#B61010" size={24} />
          <span className="favourite">Favourites</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
