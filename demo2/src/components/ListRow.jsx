export default function ListRow(props) {
  return (
    <li>
      <p>
        {props.name} ({props.age} years old)
      </p>
    </li>
  );
}
