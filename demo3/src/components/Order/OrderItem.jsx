import Button from "../UI/Button";
import css from "./orderitem.module.css";

export default function OrderItem(props) {
  const cost = props.price.toFixed(2) + " EUR";
  console.log(props);

  return (
    <li className={css["order-item"]}>
      <h2 className={css.name}>{props.name}</h2>
      <div className={css.grid}>
        <p className={css.sum}>{cost}</p>
        <p className={css.amount}>{props.amount}</p>
        <div>
          <Button className={css.button}>+</Button>
        </div>
        <div>
          <Button className={css.button}>-</Button>
        </div>
      </div>
    </li>
  );
}
