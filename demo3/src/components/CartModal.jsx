import Card from "./Card";
import styles from "../css/cartmodal.module.css";
import OpenCart from "../context/OpenCart";
import { useContext } from "react";

export default function CartModal(props) {
  const ctx = useContext(OpenCart);

  return (
    <>
      <div className={styles.background} onClick={ctx.open}></div>
      <Card className={styles.modal}>
        <ul>
          <li>asdsa</li>
          <li>asdsa</li>
          <li>asdsa</li>
          <li>asdsa</li>
        </ul>
      </Card>
    </>
  );
}
