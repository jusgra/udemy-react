import Button from "../UI/Button";

import css from "./header.module.css";

import { useEffect, useState } from "react";

export default function Header(props) {
  const totalItems = props.orderCount.food.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  const [animate, setAnimate] = useState(false);
  const classes = `${css.count} ${animate ? css.bump : ""}`;

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [totalItems]);

  return (
    <header className={css.header}>
      <h1>Pick the food! 🍕</h1>
      <Button onClick={props.onClick} className={css.button}>
        Your Order 💸 <span className={classes}>{totalItems}</span>
      </Button>
    </header>
  );
}
