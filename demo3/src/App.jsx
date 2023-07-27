import Description from "./components/Description";
import Header from "./components/Header";
import FoodList from "./components/Food/FoodList";

export default function App() {
  return (
    <>
      <Header />
      <Description />
      <FoodList />
      {/* {createPortal(showCart && <CartModal />, document.body)} */}
    </>
  );
}
