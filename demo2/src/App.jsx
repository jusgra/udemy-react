import InputForm from "./components/InputForm";
import List from "./components/List";

export default function App() {
  return (
    <div className="main-container">
      <div className="form-container">
        <InputForm />
      </div>
      <div className="list-container">
        <List />
      </div>
    </div>
  );
}
