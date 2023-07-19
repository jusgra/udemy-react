import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Table from "./components/Table";
import { useState } from "react";
import styles from "./css/msg.module.css";

export default function App() {
  const [data, setData] = useState(null);

  const calculateHandler = (userInput) => {
    const yearlyData = [];
    console.log(userInput.current);

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

    //console.log(yearlyData);

    setData(yearlyData);
  };

  return (
    <div>
      <Header />
      <InputForm submitHandle={calculateHandler} />
      {data ? <Table items={data} /> : <h2 className={styles.msg}>Please input some data</h2>}
    </div>
  );
}
