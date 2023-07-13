import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [input, setInput] = useState({ title: "", amount: "", date: "" });

  const handleChange = (event) => {
    //more safe to use in many states situation, where hundred states
    //gets updated in a line, you are guaranteed to use the most
    //recent state to update the title
    setInput((oldInput) => {
      return { ...oldInput, title: event.target.value };
    });

    //possible to be useing an outdated state values to update it
    setInput({ ...input, title: event.target.value });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={handleChange} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={handleChange} type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={handleChange} type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
