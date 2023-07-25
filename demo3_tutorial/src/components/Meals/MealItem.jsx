import css from "../css/MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const price = props.price.toFixed(2) + " EUR";

  return (
    <li className={css.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={css.descirption}>{props.description}</div>
        <div className={css.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
}
