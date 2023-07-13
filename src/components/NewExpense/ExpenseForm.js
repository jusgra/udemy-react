import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  //const [input, setInput] = useState({ title: "", amount: "", date: "" });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleChange = (identf, val) => {
    //more safe to use in many states situation, where hundred states
    //gets updated in a line, you are guaranteed to use the most
    //recent state to update the title
    // setInput((oldInput) => {
    //   return { ...oldInput, title: event.target.value };
    // });

    //possible to be useing an outdated state values to update it
    // setInput({ ...input, title: event.target.value });

    const stateObject = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    if (identf === "title") setEnteredTitle(val);
    else if (identf === "amount") setEnteredAmount(val);
    else if (identf === "date") setEnteredDate(val);

    console.log(stateObject);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={(e) => {
              handleChange("title", e.target.value);
            }}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={(e) => {
              handleChange("amount", e.target.value);
            }}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(e) => {
              handleChange("date", e.target.value);
            }}
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
