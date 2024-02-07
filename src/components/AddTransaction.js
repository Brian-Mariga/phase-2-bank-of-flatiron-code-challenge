import React, { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = { ...formData, id: Date.now() };
    addTransaction(newTransaction);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }

  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="yyyy-mm-dd"
          pattern="\d{4}-\d{2}-\d{2}"
          required
          title="Please enter a date in the format YYYY-MM-DD"
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          title="Please enter the description of the transaction"
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          title="Please enter the category of the transaction"
        />
        <label htmlFor="amount">Amount:</label>

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
