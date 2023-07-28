import Description from "./components/Description";
import Header from "./components/Header";
import FoodList from "./components/Food/FoodList";
import { useEffect, useState } from "react";
import Order from "./components/Order/Order";

export default function App() {
  const [userOrder, setUserOrder] = useState({ food: [], total: 0 });
  const [orderCount, setOrderCount] = useState(0);
  const [openOrder, setOpenOrder] = useState(false);

  const handleFoodAdd = (submitedItem) => {
    setUserOrder((oldState) => {
      //we search if there is an item in the list that has the same ID. By doing that, we would
      //know if we need to insert a new item, or only increase it's count
      const indexFound = oldState.food.findIndex((single) => single.id === submitedItem.id);

      if (indexFound !== -1) {
        const oldItem = oldState.food[indexFound];

        const currentAmount = +oldState.food[indexFound].amount;
        const amountToAdd = +submitedItem.amount;

        setOrderCount((oldState) => oldState + amountToAdd);

        //we create a new item by using the data from the old one, and only changing the amount
        const newItemToBeInserted = {
          ...oldItem,
          amount: currentAmount + amountToAdd,
        };

        //we access the current items list, and then change the item that has the index we need
        const newItems = [...oldState.food];
        newItems[indexFound] = newItemToBeInserted;

        const totalPayAmount = oldState.total + submitedItem.price * submitedItem.amount;
        return {
          food: newItems,
          total: totalPayAmount,
        };
      } else {
        setOrderCount((oldState) => oldState + 1);

        //concat creates a new array which we can use to return to the state object
        const foodItems = oldState.food.concat(submitedItem);
        const totalAmount = oldState.total + submitedItem.price * submitedItem.amount;

        //we cant use push because push method does not return an array, and we need an
        //array to be returned in a state object
        return {
          food: foodItems,
          total: totalAmount,
        };
      }
    });
  };

  // useEffect(() => {
  //   console.log(userOrder);
  // }, [userOrder]);

  const toggleOrderModal = () => {
    setOpenOrder((oldState) => !oldState);
  };

  return (
    <>
      <Header onClick={toggleOrderModal} orderCount={orderCount} />
      <Description />
      <FoodList onAdd={handleFoodAdd} />
      {openOrder && <Order onClose={toggleOrderModal} onAdd={handleFoodAdd} list={userOrder} />}
    </>
  );
}
