import FoodItemForm from "./FoodItemForm";

import css from "./fooditem.module.css";

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
    <div className={css["list-box"]}>
      <div className={css["list-item"]}>
        <h2 className={css.label}>{props.name}</h2>
        <p className={css.desc}>{props.desc}</p>
        <h2 className={css.price}>{price}</h2>
      </div>
      <FoodItemForm onSubmitForm={handleInput} />
    </div>
  );
}
