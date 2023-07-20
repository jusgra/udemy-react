import ListRow from "./ListRow";
import styles from "../css/list.module.css";

export default function List(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((single, i) => (
        <ListRow key={i} name={single.name} age={single.age} />
      ))}
    </ul>
  );
}
