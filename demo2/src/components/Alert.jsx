import Card from "./Card";
import styles from "../css/alert.module.css";
import { createPortal } from "react-dom";

const Background = (props) => {
  return <div className={styles["alert-background"]} onClick={props.errorHandle} />;
};

const AlertPop = (props) => {
  return (
    <Card className={styles.alert}>
      <header>{props.error}</header>
      <p>{props.message}</p>
      <button onClick={props.errorHandle}>okay</button>
    </Card>
  );
};

export default function Alert(props) {
  return (
    <>
      {createPortal(<Background errorHandle={props.errorHandle} />, document.body)}
      {createPortal(<AlertPop error={props.error} message={props.message} errorHandle={props.errorHandle} />, document.body)}
    </>
  );
}
