import React from "react";
import Transactions from "./Transactions";
import Header from "./Header";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Transactions />
    </div>
  );
}

export default App;
