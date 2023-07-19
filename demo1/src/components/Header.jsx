import logo from "../assets/investment-calculator-logo.png";
import styles from "../css/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
