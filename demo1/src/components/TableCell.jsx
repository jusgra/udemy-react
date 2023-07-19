export default function TableCell(props) {
  const formatter = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

  console.log(props);
  return (
    <tr>
      <td>{props.item.year}</td>
      <td>{formatter.format(props.item.savingsEndOfYear)}</td>
      <td>{formatter.format(props.item.yearlyInterest)}</td>
      <td>
        {formatter.format(
          props.item.savingsEndOfYear - props.item.initial - props.item.yearlyContribution * props.item.year
        )}
      </td>
      <td>{formatter.format(props.item.initial + props.item.yearlyContribution * props.item.year)}</td>
    </tr>
  );
}
