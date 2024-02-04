import React from "react";
import Transactions from "./Transactions";
import Header from "./Header";
import SearchBar from "./SearchBar";
import AddTransaction from "./AddTransaction";

function App() {
  // function filterTransaction() {
  //   const filteredData = data.filter((tran) => {tran.description});
  // }

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Transactions />
      <AddTransaction />
    </div>
  );
}

export default App;
