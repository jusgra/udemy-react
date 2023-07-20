import Card from "./Card";

export default function Alert(props) {
  return (
    <div>
      <div className="alert-background" onClick={props.errorHandle} />
      <Card className="alert">
        <header>{props.error}</header>
        <p>{props.message}</p>
        <button onClick={props.errorHandle}>okay</button>
      </Card>
    </div>
  );
}
