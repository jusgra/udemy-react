import Chart from "../Charts/Chart";

export default function ExpensesChart(props) {
  let listOfPoints = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];

  for (const single of props.data) {
    listOfPoints[single.date.getMonth()].value += single.amount;
  }

  return <Chart dataPoints={listOfPoints} />;
}
