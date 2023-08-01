import FoodItemForm from "./FoodItemForm";
import css from "./fooditem.module.css";

export default function FoodItem(props) {
  const price = props.price.toFixed(2) + " EUR";

  console.log(props);

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
      </div>
      {/* <div className={css.img}> */}
      <img className={css.img2} alt={props.img} src={props.img} />
      {/* </div> */}
      <FoodItemForm price={price} onSubmitForm={handleInput} />
    </div>
  );
}
