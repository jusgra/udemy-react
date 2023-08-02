import Button from "../UI/Button";
import css from "./orderitem.module.css";

export default function OrderItem(props) {
  const cost = (props.price * props.amount).toFixed(2) + " EUR";

  return (
    <li className={css["order-item"]}>
      <h2 className={css.name}>{props.name}</h2>
      <p className={css.sum}>{cost}</p>
      <div className={css.grid}>
        <p className={css["amount-label"]}>Amount</p>
        <p className={css.amount}>{props.amount}</p>
        <div className={css["plus-button"]}>
          <Button
            onClick={() => {
              props.onAdd({ id: props.id, name: props.name, price: props.price, amount: 1 });
            }}
            className={css.button}
          >
            +
          </Button>
        </div>
        <div className={css["minus-button"]}>
          <Button
            onClick={() => {
              props.onRemove(props.id);
            }}
            className={css.button}
          >
            -
          </Button>
        </div>
      </div>
    </li>
  );
}
