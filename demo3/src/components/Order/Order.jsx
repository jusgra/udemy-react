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
              onAdd={props.onAdd}
              key={single.id}
              id={single.id}
              name={single.name}
              price={single.price}
              amount={single.amount}
            />
          ))}
        </ul>
        <p>Total amount: {totalCost}</p>
        <button onClick={props.onClose}>Submit Order</button>
        <button onClick={props.onClose}>Close</button>
      </Card>
    </>
  );
}
