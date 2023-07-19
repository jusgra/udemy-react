import TableCell from "./TableCell";
import styles from "../css/table.module.css";

export default function Table(props) {
  console.log(props);
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((single) => {
          return <TableCell key={single.year} item={single} />;
        })}
      </tbody>
    </table>
  );
}
