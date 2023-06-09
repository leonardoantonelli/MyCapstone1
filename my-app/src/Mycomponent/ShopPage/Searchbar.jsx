import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      key="random1"
      value={keyword}
      placeholder={"cerca scarpa"}
      className="w-100"
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
