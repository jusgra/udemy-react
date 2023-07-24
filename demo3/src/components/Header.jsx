import CartButton from "./CartButton";
import styles from "../css/header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>ReactMeals</h1>
      <CartButton />
    </div>
  );
}
