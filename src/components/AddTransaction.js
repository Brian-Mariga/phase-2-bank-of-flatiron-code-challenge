import React, { useState } from "react";

function AddTransaction() {


  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
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
        <button type="submit">Clear</button>
      </form>
    </div>
  );
}

export default AddTransaction;
