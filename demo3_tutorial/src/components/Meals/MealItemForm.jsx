import { useRef } from "react";
import css from "../css/MealItemForm.module.css";
import Input from "../UI/Input";

export default function MealItemForm(props) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = +inputRef.current.value;
    props.onAddToCart(input);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{ id: "amount", type: "number", min: "1", max: "10", step: "1", defaultValue: "1" }}
      />
      <button>+ Add</button>
    </form>
  );
}
