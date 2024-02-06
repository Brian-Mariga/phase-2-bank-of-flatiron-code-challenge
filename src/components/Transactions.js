import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((res) => res.json())
      .then((transactions) => {
        const dataToDisplay = transactions.filter((transaction) => {
          /* */
          if (search === "") {
            return true;
          } else {
            return transaction.description
              .toLowerCase()
              .includes(search.toLowerCase());
          }
        });
        setTransactions(dataToDisplay);
      });
  }, [search]);

  const borderStyle = { border: "1px solid black" };
  return (
    <>
      <SearchBar onSearch={handleSearchInput} />
      <table>
        <thead>
          <th style={borderStyle}>ID</th>
          <th style={borderStyle}>Date</th>
          <th style={borderStyle}>Description</th>
          <th style={borderStyle}>Category</th>
          <th style={borderStyle}>Amount</th>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
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
    </>
  );
}

export default Transaction;
