import css from "./button.module.css";

export default function Button(props) {
  const classes = css.button + " " + props.className;
  return (
    <button onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  );
}
