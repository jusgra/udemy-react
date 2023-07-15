import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [filter, setFilter] = useState("2020");
  const handleFilter = (selectedYear) => {
    setFilter(selectedYear);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter filterdYear={filter} onExpensesFilter={handleFilter} />
      </div>
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </Card>
  );
}
