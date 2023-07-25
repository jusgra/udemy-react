import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible((oldState) => !oldState);
  };

  return (
    <>
      {isCartVisible && <Cart onCloseCart={toggleCart} />}
      <Header onShowCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
