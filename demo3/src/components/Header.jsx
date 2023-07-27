import css from "../css/header.module.css";
import Button from "./UI/Button";

export default function Header(props) {
  return (
    <header className={css.header}>
      <h1>Pick the food! 🍕</h1>
      <Button onClick={props.onClick} className={css.button}>
        Your Order 💸 <span>{props.orderCount}</span>
      </Button>
    </header>
  );
}
