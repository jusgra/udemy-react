import img from "../../assets/meals.jpg";

import HeaderCartButton from "./HeaderCartButton";

import css from "../css/Header.module.css";

export default function Header(props) {
  return (
    <>
      <header className={css.header}>
        <h1>React React</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={css["main-image"]}>
        <img alt="background" src={img}></img>
      </div>
    </>
  );
}
