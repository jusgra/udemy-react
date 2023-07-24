import { useRef } from "react";
import styles from "../css/itemform.module.css";

export default function ListItemButtons() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["button-box"]}>
      <label className={styles.label}>Amount</label>
      <input ref={inputRef} className={styles.input} type="number" min="0" max="10" step="1" defaultValue="1"></input>
      <button className={styles.button}>+ Add</button>
    </form>
  );
}
