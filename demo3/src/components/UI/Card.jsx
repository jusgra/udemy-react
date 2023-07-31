import css from "./card.module.css";

export default function Card(props) {
  const classes = css.card + " " + props.className;
  return <div className={classes}>{props.children}</div>;
}
