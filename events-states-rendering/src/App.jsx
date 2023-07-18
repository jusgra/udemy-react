import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },

  {
    id: "e5",
    title: "PS5",
    amount: 110,
    date: new Date(2022, 3, 12),
  },

  {
    id: "e6",
    title: "Pants",
    amount: 450,
    date: new Date(2022, 2, 12),
  },

  {
    id: "e7",
    title: "Computer",
    amount: 149,
    date: new Date(2022, 1, 12),
  },
];

export default function App() {
  const [items, setItems] = useState(DUMMY_EXPENSE);

  const handleNewExpense = (newExpense) => {
    setItems((oldItems) => [newExpense, ...oldItems]);
  };

  return (
    <div>
      <NewExpense onNewExpense={handleNewExpense} />
      <Expenses items={items} />
    </div>
  );
}
