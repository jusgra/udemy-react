import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "../css/NewExpense.css";

export default function NewExpense({ onNewExpense }) {
  const [showForm, setShowForm] = useState(false);

  const handleExpenseForm = (expense) => {
    const expenseSubmited = {
      ...expense,
      id: Math.random().toString(),
    };

    onNewExpense(expenseSubmited);
    setShowForm(!showForm);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onShowForm={toggleForm} onExpenseForm={handleExpenseForm} />
      ) : (
        <button onClick={toggleForm}>Add New Expense</button>
      )}
    </div>
  );
}
