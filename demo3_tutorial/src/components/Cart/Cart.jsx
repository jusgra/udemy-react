import Modal from "../UI/Modal";
import css from "../css/Cart.module.css";

export default function Cart(props) {
  const cartItems = (
    <ul className={css["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((single) => {
        return <li>{single.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={css.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={css.button}>Order</button>
      </div>
    </Modal>
  );
}
