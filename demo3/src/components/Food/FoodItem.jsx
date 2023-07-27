import FoodItemForm from "./FoodItemForm";
import styles from "./fooditem.module.css";

export default function FoodItem(props) {
  const price = props.price.toFixed(2) + " EUR";

  const handleInput = (itemAmount) => {
    const itemToSubmit = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +itemAmount,
    };
    props.onAdd(itemToSubmit);
  };

  return (
    <>
      <li className={styles["list-box"]}>
        <div className={styles["list-item"]}>
          <h2 className={styles.label}>{props.name}</h2>
          <p className={styles.desc}>{props.desc}</p>
          <h2 className={styles.price}>{price}</h2>
        </div>
        <FoodItemForm onSubmitForm={handleInput} />
      </li>
      <hr />
    </>
  );
}
