import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchField.scss";
const SearchField = () => {
  let iconStyles = { background: "transparent", fontSize: "1.3rem" };
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch('')
  };
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
