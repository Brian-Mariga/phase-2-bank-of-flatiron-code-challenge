import React from "react";
import Transaction from "./Transactions";
import Header from "./Header";
import AddTransaction from "./AddTransaction";

function App() {
  // function filterTransaction() {
  //   const filteredData = data.filter((tran) => {tran.description});
  // }

  return (
    <div className="App">
      <Header />
      <Transaction />
      <AddTransaction />
    </div>
  );
}

export default App;
