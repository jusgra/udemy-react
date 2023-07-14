import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [filter, setFilter] = useState("2020");

  let text = "19 21 22";

  if (filter === "2019") text = "20 21 22";
  else if (filter === "2020") text = "19 21 22";
  else if (filter === "2021") text = "19 20 22";
  else text = "19 20 21";

  const handleFilter = (selectedYear) => {
    setFilter(selectedYear);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter filterdYear={filter} onExpensesFilter={handleFilter} />
      </div>
      <p style={{ color: "white" }}>{text}</p>
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
    </Card>
  );
}
