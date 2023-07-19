export default function SingleInput(props) {
  return (
    <p>
      <label>{props.label}</label>
      <input onChange={(e) => props.change(e.target.value, props.name)} value={props.state} type="number" />
    </p>
  );
}
