import CartIcon from "./CartIcon";
import styles from "../css/cardbutton.module.css";
import { useContext } from "react";
import OpenCart from "../context/OpenCart";

export default function CartButton() {
  const ctx = useContext(OpenCart);

  return (
    <div className={styles.cart} onClick={ctx.open}>
      <CartIcon className={styles.icon} />
      <p className={styles.label}>Your Cart</p>
      <div className={styles.count}>2</div>
    </div>
  );
}
