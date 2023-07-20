import styles from "../css/card.module.css";

export default function Card(props) {
  return <div className={`${styles["card-container"]} ${props.className}`}>{props.children}</div>;
}
