import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import AddTransaction from "./AddTransaction";

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  const borderStyle = { border: "1px solid black" };
  return (
    <>
      <SearchBar onSearch={handleSearchInput} />
      <table>
        <thead>
          <tr>
            <th style={borderStyle}>ID</th>
            <th style={borderStyle}>Date</th>
            <th style={borderStyle}>Description</th>
            <th style={borderStyle}>Category</th>
            <th style={borderStyle}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={borderStyle}>{transaction.id}</td>
              <td style={borderStyle}>{transaction.date}</td>
              <td style={borderStyle}>{transaction.description}</td>
              <td style={borderStyle}>{transaction.category}</td>
              <td style={borderStyle}>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddTransaction addTransaction={addTransaction} />
    </>
  );
}

export default Transaction;
