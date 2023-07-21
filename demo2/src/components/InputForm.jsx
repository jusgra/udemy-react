import { useRef, useState } from "react";
import styles from "../css/inputForm.module.css";

export default function InputFrom(props) {
  const userName = useRef();
  const userAge = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ name: userName.current.value, age: userAge.current.value });
  };

  return (
    <form className={styles["input-form"]} onSubmit={handleSubmit}>
      <label>Username</label>
      <input ref={userName} type="text"></input>
      <label>Age (Years)</label>
      <input ref={userAge} type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
}
