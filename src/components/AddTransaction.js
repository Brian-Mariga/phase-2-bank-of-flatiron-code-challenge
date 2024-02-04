import React, { useState } from "react";

function AddTransaction() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleClear() {
    setDate("");
    setDescription("");
    setAmount("");
    setCategory("");
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
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
      <input
        type="text"
        id="description"
        placeholder="Description"
        required
        title="Please enter the description of the transaction"
      />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        placeholder="Category"
        required
        title="Please enter the category of the transaction"
      />
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        placeholder="Amount"
        required
        title="Please enter the amount"
      />

      <button type="submit">Add Transaction</button>
      <button type="submit" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
}

export default AddTransaction;
