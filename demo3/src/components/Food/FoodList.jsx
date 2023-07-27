import FoodItem from "./FoodItem";
import Card from "../UI/Card";
import css from "./foodlist.module.css";
import DUMMY_MEALS from "../../dummy_meals";

export default function FoodList() {
  const listOfItems = DUMMY_MEALS.map((single) => {
    return <FoodItem key={single.id} name={single.name} desc={single.description} price={single.price} />;
  });

  return (
    <Card className={css.foodlist}>
      <ul>{listOfItems}</ul>
    </Card>
  );
}
