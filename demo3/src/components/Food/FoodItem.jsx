import FoodItemForm from "./FoodItemForm";
import styles from "./fooditem.module.css";

export default function FoodItem(props) {
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
        <FoodItemForm />
      </li>
      <hr />
    </>
  );
}
