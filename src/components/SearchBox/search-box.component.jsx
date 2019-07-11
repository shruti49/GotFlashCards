import React from "react";

//FUNCTIONAL COMPONENT
export const Searchbox = ({ placeholder, searchChange }) => {
  return (
    <input
      className="pa3 ba b--green bg-lightest-blue search-input"
      type="search"
      placeholder={placeholder}
      onChange={searchChange}
      style={{ borderRadius: "5px", width: "250px" }}
    />
  );
};
