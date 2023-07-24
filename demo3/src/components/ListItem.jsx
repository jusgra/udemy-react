import ItemForm from "./ItemForm";
import styles from "../css/listitem.module.css";

export default function ListItem(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <>
      <li className={styles["list-box"]}>
        <div className={styles["list-item"]}>
          <h2 className={styles.label}>{props.name}</h2>
          <p className={styles.desc}>{props.desc}</p>
          <h2 className={styles.price}>{formatter.format(props.price)}</h2>
        </div>
        <ItemForm />
      </li>
      <hr />
    </>
  );
}
