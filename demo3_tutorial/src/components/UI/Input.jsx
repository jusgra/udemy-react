import css from "../css/Input.module.css";

export default function Input(props) {
  return (
    <div className={css.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
    </div>
  );
}
