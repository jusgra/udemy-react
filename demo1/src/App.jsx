import { useState } from "react";

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Table from "./components/Table";

import styles from "./css/msg.module.css";

export default function App() {
  const [calculatedData, setCalculatedData] = useState(null);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput.current;
    const yearlyContribution = +userInput.yearly;
    const expectedReturn = +userInput.expected / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        initial: +userInput.current,
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setCalculatedData(yearlyData);
  };

  return (
    <div>
      <Header />
      <InputForm submitHandle={calculateHandler} />
      {/* Conditional rendering the table if it has data in it, if not, returns an H1 message */}
      {calculatedData ? <Table items={calculatedData} /> : <h2 className={styles.msg}>Please input some data</h2>}
    </div>
  );
}
