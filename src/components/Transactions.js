import React, { useEffect, useState } from "react";

function Transactions({ search }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filteredTransactions = data.filter((transaction) =>
    transaction.description.includes(search)
  );

  // setData(filteredTransactions)

  const borderStyle = { border: "1px solid black" };
  return (
    <>
      <table>
        <thead>
          <th style={borderStyle}>ID</th>
          <th style={borderStyle}>Date</th>
          <th style={borderStyle}>Description</th>
          <th style={borderStyle}>Category</th>
          <th style={borderStyle}>Amount</th>
        </thead>
        <tbody>
          {data.map((trans) => (
            <tr key={trans.id}>
              <td style={borderStyle}>{trans.id}</td>
              <td style={borderStyle}>{trans.date}</td>
              <td style={borderStyle}>{trans.description}</td>
              <td style={borderStyle}>{trans.category}</td>
              <td style={borderStyle}>{trans.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Transactions;
