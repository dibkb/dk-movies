import React, { useState, useEffect } from "react";
// import ResultError from "../ResultError/ResultError";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../features/fetchMovies";
import { addMovies } from "../../features/MovieSlice";
import { BsSearch } from "react-icons/bs";
import "./SearchField.scss";
const SearchField = () => {
  let iconStyles = { background: "transparent", fontSize: "1.3rem" };
  // initialize dispatch
  const dispatch = useDispatch();
  const [search, setSearch] = useState("Pirates");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch("");
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(search);
      // Send Axios request here
      fetchMovies(search).then((response) => {
        if (response.Response === "True") dispatch(addMovies(response.Search));
        // else if (response.Response === "False")
        //   return <ResultError result={search} />;
      });
    }, 369);
    return () => clearTimeout(delayDebounceFn);
  }, [search,dispatch]);
  return (
    <form className="search-form" onSubmit={searchHandler}>
      <BsSearch style={iconStyles} className="search-icon" />
      <input
        type="text"
        placeholder="Search movies here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchField;
