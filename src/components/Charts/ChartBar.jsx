import "../css/ChartBar.css";

export default function ChartBar(props) {
  let setHeight = "0%";

  if (props.max > 0) setHeight = Math.round((props.value / props.max) * 100) + "%";
  return (
    <div>
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: setHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
