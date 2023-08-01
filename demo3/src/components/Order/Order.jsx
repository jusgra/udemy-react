import Button from "../UI/Button";
import Card from "../UI/Card";
import OrderItem from "./OrderItem";
import css from "./order.module.css";

export default function Order(props) {
  const totalCost = props.list.total.toFixed(2) + " EUR";

  return (
    <>
      <div onClick={props.onClose} className={css.background} />
      <Card className={css.order}>
        <ul>
          {props.list.food.map((single) => (
            <OrderItem
              onRemove={props.onRemove}
              onAdd={props.onAdd}
              key={single.id}
              id={single.id}
              name={single.name}
              price={single.price}
              amount={single.amount}
            />
          ))}
        </ul>
        <div className={css["order-buttons"]}>
          <h2 className={css.total}>Total amount: {totalCost}</h2>
          <Button className={css.total} onClick={props.onClose}>
            Submit Order
          </Button>
          <Button onClick={props.onClose}>Close</Button>
        </div>
      </Card>
    </>
  );
}
