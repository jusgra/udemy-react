import Card from "../UI/Card";
import "../css/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filter, setFilter] = useState("2020");
  const handleFilter = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filteredArray = props.items.filter((single) => {
    return filter === single.date.getFullYear().toString();
  });

  return (
    <Card className="expenses">
      <ExpensesChart data={filteredArray} />
      <div>
        <ExpensesFilter filterdYear={filter} onExpensesFilter={handleFilter} />
      </div>
      <ExpensesList items={filteredArray} />
    </Card>
  );
}
