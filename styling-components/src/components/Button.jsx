import styles from "./css/Button.module.css";

export default function Button(props) {
  return (
    //styles is an object, where the selectors in css file are the object properties
    <button type={props.type} className={styles.baton} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
