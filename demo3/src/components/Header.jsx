import Button from "./UI/Button";

import css from "../css/header.module.css";

export default function Header(props) {
  const totalItems = props.orderCount.food.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  return (
    <header className={css.header}>
      <h1>Pick the food! 🍕</h1>
      <Button onClick={props.onClick} className={css.button}>
        Your Order 💸 <span>{totalItems}</span>
      </Button>
    </header>
  );
}
