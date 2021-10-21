import React from 'react'
import { Link } from "react-router-dom"
import { GiSharpedTeethSkull } from 'react-icons/gi';
import "./Navbar.scss";
import SearchField from '../SearchField/SearchField';
const Navbar = () => {
   let iconStyles = { background: "transparent", fontSize: "2rem" ,color : "#DEC79D"};
   return (
      <div className = 'navbar-container'>
         <Link to = '/' className = 'brand-container'>
            <GiSharpedTeethSkull style = {iconStyles}/>
            <span className = 'brand'>dkmovies</span>
         </Link>
         <div className = 'search-container'>
            <SearchField/>
         </div>
         <div className = 'right-side'>
            <Link to = '/' className = 'home-link'> Home</Link>
         </div>
      </div>
   )
}

export default Navbar
