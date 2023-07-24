import { useState } from "react";
import { createPortal } from "react-dom";
import Description from "./components/Description";
import Header from "./components/Header";
import List from "./components/List";
import CartModal from "./components/CartModal";
import OpenCart from "./context/OpenCart";

export default function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartFunction = () => {
    console.log("pressed");
    setShowCart((oldState) => {
      console.log(oldState);
      return !oldState;
    });
  };

  return (
    <OpenCart.Provider value={{ open: openCartFunction }}>
      <Header />
      <Description />
      <List />
      {createPortal(showCart && <CartModal />, document.body)}
    </OpenCart.Provider>
  );
}
