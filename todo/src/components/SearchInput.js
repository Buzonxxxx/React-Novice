import React from "react";

const SearchInput = ({ onFilterTextChange }) => {
  const inputStyle = {
    width: "500px",
    lineHeight: "50px",
    border: "solid blue 1px",
    margin: "10px auto",
    background: "linear-gradient(#eee, #fff)",
    textAlign: "center",
    fontSize: "20px"
  };
  return (
    <form style={{ textAlign: "center" }} action="#">
      <input
        style={inputStyle}
        type="text"
        placeholder="search here"
        onChange={e => onFilterTextChange(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
