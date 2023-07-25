import css from "../css/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

export default function MealItem(props) {
  const price = props.price.toFixed(2) + " EUR";

  const ctx = useContext(CartContext);

  const addHandler = (amount) => {
    ctx.addItem({ id: props.id, name: props.name, price: props.price, amount: amount });
  };

  return (
    <li className={css.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={css.descirption}>{props.description}</div>
        <div className={css.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addHandler} />
      </div>
    </li>
  );
}
