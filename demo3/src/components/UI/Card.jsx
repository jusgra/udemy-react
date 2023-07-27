import css from "./card.module.css";

export default function Card(props) {
  return <div className={css.card + " " + props.className}>{props.children}</div>;
}
