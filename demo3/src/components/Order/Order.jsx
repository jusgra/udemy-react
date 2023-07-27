import Card from "../UI/Card";
import css from "./order.module.css";

export default function Order(props) {
  console.log(props);
  return (
    <Card className={css.order}>
      <ul>
        {props.list.food.map((single) => (
          <li>{single.name}</li>
        ))}
      </ul>
    </Card>
  );
}
