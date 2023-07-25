import css from "../css/Input.module.css";
import React from "react";

export default React.forwardRef(function Input(props, refas) {
  return (
    <div className={css.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={refas} id={props.input.id} {...props.input} />
    </div>
  );
});
