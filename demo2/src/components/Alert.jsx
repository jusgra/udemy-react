import Card from "./Card";
import styles from "../css/alert.module.css";

export default function Alert(props) {
  return (
    <div>
      <div className={styles["alert-background"]} onClick={props.errorHandle} />
      <Card className={styles.alert}>
        <header>{props.error}</header>
        <p>{props.message}</p>
        <button onClick={props.errorHandle}>okay</button>
      </Card>
    </div>
  );
}
