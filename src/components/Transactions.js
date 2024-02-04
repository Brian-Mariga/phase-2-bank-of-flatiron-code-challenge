import React, { useEffect, useState } from "react";

function Transactions() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
}

export default Transactions;
