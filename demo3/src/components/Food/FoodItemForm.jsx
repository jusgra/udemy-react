import Button from "../UI/Button";

import css from "./fooditemform.module.css";

import { useRef } from "react";

export default function FoodItemForm(props, referenceToForward) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmitForm(inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit} className={css["button-box"]}>
      <label className={css.label}>Amount</label>
      <input ref={inputRef} className={css.input} type="number" min="1" max="10" step="1" defaultValue="1"></input>
      <Button className={css.button}>+ Add</Button>
    </form>
  );
}
