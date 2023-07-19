import { useState } from "react";

import buttonStyles from "../css/button.module.css";
import formStyles from "../css/form.module.css";

export default function InputForm(props) {
  const [inputs, setInputs] = useState({ current: "", yearly: "", expected: "", duration: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitHandle(inputs);
  };

  const handleChange = (property, value) => {
    setInputs((oldInputs) => {
      return { ...oldInputs, [property]: value };
    });
  };

  const handleResetClick = (e) => {
    e.preventDefault();
    setInputs({ current: "", yearly: "", expected: "", duration: "" });
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      <div className={formStyles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings (€)</label>
          <input
            onChange={(e) => handleChange("current", e.target.value)}
            value={inputs.current}
            type="number"
            id="current-savings"
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (€)</label>
          <input
            onChange={(e) => handleChange("yearly", e.target.value)}
            value={inputs.yearly}
            type="number"
            id="yearly-contribution"
            required
          />
        </p>
      </div>
      <div className={formStyles["input-group"]}>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            onChange={(e) => handleChange("expected", e.target.value)}
            value={inputs.expected}
            type="number"
            id="expected-return"
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => handleChange("duration", e.target.value)}
            value={inputs.duration}
            type="number"
            id="duration"
            required
          />
        </p>
      </div>
      <p className={buttonStyles.actions}>
        <button onClick={handleResetClick} type="reset" className={buttonStyles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={buttonStyles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
