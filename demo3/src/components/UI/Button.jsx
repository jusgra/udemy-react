import css from "./button.module.css";

export default function Button(props) {
  return (
    <button onClick={props.onClick} className={css.button + " " + props.className}>
      {props.children}
    </button>
  );
}
