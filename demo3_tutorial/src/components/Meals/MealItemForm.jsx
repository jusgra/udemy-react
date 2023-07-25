import css from "../css/MealItemForm.module.css";
import Input from "../UI/Input";

export default function MealItemForm() {
  return (
    <form className={css.form}>
      <Input label="Amount" input={{ id: "amount", type: "number", min: "1", max: "10", step: "1", defaultValue: "1" }} />
      <button>+ Add</button>
    </form>
  );
}
