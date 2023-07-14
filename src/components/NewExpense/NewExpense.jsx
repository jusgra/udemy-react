import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ onNewExpense }) {
  const handleExpenseForm = (expense) => {
    const expenseSubmited = {
      ...expense,
      id: Math.random().toString(),
    };

    onNewExpense(expenseSubmited);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseForm={handleExpenseForm} />
    </div>
  );
}
