import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  isSportingGood,
  onFilterTextChange,
  onInStockChange,
  onIsSportingGoodChange
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={e => onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={e => onInStockChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </p>
      <p>
        <input
          type="checkbox"
          checked={isSportingGood}
          onChange={e => onIsSportingGoodChange(e.target.checked)}
        />{" "}
        Only show Sporting products
      </p>
    </form>
  );
};

export default SearchBar;
