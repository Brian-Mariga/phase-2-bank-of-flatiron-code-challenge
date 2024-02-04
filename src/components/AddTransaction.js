import React from "react";

function AddTransaction() {
  return (
    <form id="form">
      <label htmlFor="date">Date:</label>
      <input
        type="text"
        id="date"
        placeholder="yyyy-mm-dd"
        pattern="\d{4}-\d{2}-\d{2}"
        required
        title="Please enter a date in the format YYYY-MM-DD"
      />
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" placeholder="Description" />
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" placeholder="Category" />
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" placeholder="Amount" />

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
