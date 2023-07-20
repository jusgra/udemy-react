import { useState } from "react";
import styles from "../css/inputForm.module.css";

export default function InputFrom(props) {
  const [inputs, setInputs] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((oldInputs) => {
      return { ...oldInputs, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(inputs);
  };

  return (
    <form className={styles["input-form"]} onSubmit={handleSubmit}>
      <label>Username</label>
      <input onChange={handleChange} name="name" value={inputs.name} type="text"></input>
      <label>Age (Years)</label>
      <input onChange={handleChange} name="age" value={inputs.age} type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
}
