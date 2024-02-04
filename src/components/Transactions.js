import React, { useEffect, useState } from "react";

function Transactions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <table>
        <thead>
          <th style={{ border: "1px solid black" }}>ID</th>
          <th style={{ border: "1px solid black" }}>Date</th>
          <th style={{ border: "1px solid black" }}>Description</th>
          <th style={{ border: "1px solid black" }}>Category</th>
          <th style={{ border: "1px solid black" }}>Amount</th>
        </thead>
        <tbody>
          {data.map((trans) => (
            <tr key={trans.id}>
              <td style={{ border: "1px solid black" }}>{trans.id}</td>
              <td style={{ border: "1px solid black" }}>{trans.date}</td>
              <td style={{ border: "1px solid black" }}>{trans.description}</td>
              <td style={{ border: "1px solid black" }}>{trans.category}</td>
              <td style={{ border: "1px solid black" }}>{trans.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Transactions;
