import React, {useState,useEffect,useCallback } from "react";
import {useHistory} from 'react-router-dom';
// import ResultError from "../ResultError/ResultError";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../features/fetchMovies";
import { addMovies } from "../../features/MovieSlice";
import { BsSearch } from "react-icons/bs";
import { FiX } from "react-icons/fi";


import "./SearchField.scss";
const SearchField = () => {
  const history = useHistory();
  const typing = true;
  let iconStyles = { background: "transparent", fontSize: "1.3rem" };
  // initialize dispatch
  const dispatch = useDispatch();
  const [search, setSearch] = useState("Pirates");
  // const searchHandler = (e) => {
  //   useCallback(() => history.push('/'), [history])
  //   e.preventDefault();
  // };
  const handleOnClick = useCallback(() => history.push('/'), [history]);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // console.log(search);
      // Send Axios request here
      fetchMovies(search).then((response) => {
        if (response.Response === "True") dispatch(addMovies(response.Search));
        // else if (response.Response === "False")
        //   return <ResultError result={search} />;
      });
    }, 369);
    return () => clearTimeout(delayDebounceFn);
  }, [search, dispatch]);
  return (
    <form className="search-form" onSubmit={handleOnClick}>
      <BsSearch style={iconStyles} className="search-icon" />
      <input
        type="text"
        placeholder="Search movies here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {typing && search !== "" && (
        <FiX
        className = 'cancel-icon'
          style={iconStyles}
          color="#fff"
          onClick={() => setSearch("")}
        />
      )}
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchField;
