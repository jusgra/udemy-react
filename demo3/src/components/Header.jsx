import css from "../css/header.module.css";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header className={css.header}>
      <h1>Pick the food! 🍕</h1>
      <Button className={css.button}>Order 💸</Button>
    </header>
  );
}
