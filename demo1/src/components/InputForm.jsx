import { useState } from "react";

export default function InputForm(props) {
  const [inputs, setInputs] = useState({ current: "", yearly: "", expected: "", duration: "" });

  const handleSubmit = () => {};

  const handleChange = (prop, value) => {
    setInputs((oldInputs) => {
      return { ...oldInputs, [prop]: value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setInputs({ current: "", yearly: "", expected: "", duration: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) => handleChange("current", e.target.value)}
            value={inputs.current}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) => handleChange("yearly", e.target.value)}
            value={inputs.yearly}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            onChange={(e) => handleChange("expected", e.target.value)}
            value={inputs.expected}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => handleChange("duration", e.target.value)}
            value={inputs.duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={handleClick} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
