import { useState } from "react";
import InputForm from "./components/InputForm";
import List from "./components/List";
import Card from "./components/Card";
import Alert from "./components/Alert";

export default function App() {
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState();

  const handleData = (data) => {
    if (data.name.trim() === "") {
      setAlert({ error: "Invalid Username", message: "Please input a valid username" });
      return;
    } else if (data.age <= 0) {
      setAlert({ error: "Invalid Age", message: "Please input a valid age which is above 0" });
      return;
    }

    setItems((oldItems) => {
      return [...oldItems, data];
    });
  };

  const errorHandle = () => {
    setAlert();
  };

  return (
    <div className="main-container">
      {alert && <Alert errorHandle={errorHandle} error={alert.error} message={alert.message} />}
      <Card>
        <InputForm onSubmit={handleData} />
      </Card>
      <Card>
        <List items={items} />
      </Card>
    </div>
  );
}
