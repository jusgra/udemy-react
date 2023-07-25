import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible((oldState) => !oldState);
  };

  return (
    <CartProvider>
      {isCartVisible && <Cart onCloseCart={toggleCart} />}
      <Header onShowCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
