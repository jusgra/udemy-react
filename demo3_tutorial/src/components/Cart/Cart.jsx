import { useContext } from "react";
import Modal from "../UI/Modal";
import css from "../css/Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const ctx = useContext(CartContext);

  const amount = ctx.totalAmount.toFixed(2) + " EUR";
  const hasItems = ctx.items.length > 0;

  const cartItemRemover = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={css["cart-items"]}>
      {ctx.items.map((single) => {
        return (
          <CartItem
            key={single.id}
            name={single.name}
            amount={single.amount}
            price={single.price}
            onRemove={cartItemRemover.bind(null, single.id)}
            onAdd={cartItemAddHandler.bind(null, single)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={css.total}>
        <span>Total Amount</span>
        <span>{amount}</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={css.button}>Order</button>}
      </div>
    </Modal>
  );
}
