import React, { useState } from "react";
import Transactions from "./Transactions";

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        onChange={onSearch}
        placeholder="Search transaction description..."
        style={{ width: "300px", margin: "0 auto" }}
      />
    </div>
  );
}

export default SearchBar;
