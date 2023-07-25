import CartIcon from "../Cart/CartIcon";

import css from "../css/HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  return (
    <button className={css.button} onClick={props.onClick}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>3</span>
    </button>
  );
}
