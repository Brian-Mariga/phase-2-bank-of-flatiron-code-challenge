import React, { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search transaction description..."
        style={{ width: "300px", margin: "0 auto" }}
        value={search}
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default SearchBar;
