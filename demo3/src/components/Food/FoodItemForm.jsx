import { useRef } from "react";
import styles from "./fooditemform.module.css";
import Button from "../UI/Button";

export default function FoodItemForm(props, referenceToForward) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmitForm(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["button-box"]}>
      <label className={styles.label}>Amount</label>
      <input ref={inputRef} className={styles.input} type="number" min="0" max="10" step="1" defaultValue="1"></input>
      <Button className={styles.button}>+ Add</Button>
    </form>
  );
}
