export default function TableRow(props) {
  const formatter = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

  const totalSavings = formatter.format(props.item.savingsEndOfYear);
  const interest = formatter.format(props.item.yearlyInterest);
  const totalInterest = formatter.format(
    props.item.savingsEndOfYear - props.item.initial - props.item.yearlyContribution * props.item.year
  );
  const capital = formatter.format(props.item.initial + props.item.yearlyContribution * props.item.year);

  return (
    <tr>
      <td>{props.item.year}</td>
      <td>{totalSavings}</td>
      <td>{interest}</td>
      <td>{totalInterest}</td>
      <td>{capital}</td>
    </tr>
  );
}
