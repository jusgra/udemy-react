import classes from "./css/Login.module.css";

export default function Input(props) {
  return (
    <div className={`${classes.control} ${props.state.isValid === false ? classes.invalid : ""}`}>
      <label htmlFor={props.form}>{props.form === "email" ? "E-mail" : "Password"}</label>
      <input type={props.form} id={props.form} value={props.state.value} onChange={props.change} onBlur={props.blur} />
    </div>
  );
}
