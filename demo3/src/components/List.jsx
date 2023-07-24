import ListItem from "./ListItem";
import Card from "./Card";
import styles from "../css/list.module.css";
import DUMMY_MEALS from "../dummy_meals";

export default function List() {
  return (
    <Card className={styles.list}>
      <ul>
        {DUMMY_MEALS.map((single) => {
          return <ListItem key={single.id} name={single.name} desc={single.description} price={single.price} />;
        })}
      </ul>
    </Card>
  );
}
