import DUMMY_MEALS from "./dummy_meals";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import css from "../css/AvailableMeals.module.css";

export default function AvailableMeals() {
  return (
    <section className={css.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((single) => (
            <MealItem
              key={single.id}
              id={single.id}
              name={single.name}
              description={single.description}
              price={single.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
