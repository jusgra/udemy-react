import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import css from "../css/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
export default function HeaderCartButton(props) {
  const ctx = useContext(CartContext);

  const [btnHigh, setBtnHigh] = useState(false);

  const btnClasses = `${css.button} ${btnHigh ? css.bump : ""}`;

  const numberOfItems = ctx.items.reduce((sum, current) => {
    return sum + current.amount;
  }, 0);

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnHigh(true);

    const timer = setTimeout(() => {
      setBtnHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>{numberOfItems}</span>
    </button>
  );
}
