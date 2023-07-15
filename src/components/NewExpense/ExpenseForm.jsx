import "../css/ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  //const [input, setInput] = useState({ title: "", amount: "", date: "" });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (identf, val) => {
    if (identf === "title") setEnteredTitle(val);
    else if (identf === "amount") setEnteredAmount(val);
    else if (identf === "date") setEnteredDate(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stateObject = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onExpenseForm(stateObject);

    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // if (showForm) {
  return (
    <form onSubmit={handleSubmit}>
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
        <button type="button" onClick={props.onShowForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
  // } else {
  //   return <button onClick={toggleForm}>Add New Expense</button>;
  // }
}
