import "../css/Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  const values = props.dataPoints.map((single) => single.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((single) => (
        <ChartBar key={single.month} value={single.value} max={maxValue} label={single.month} />
      ))}
    </div>
  );
}
