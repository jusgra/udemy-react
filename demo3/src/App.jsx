import Description from "./components/Description";
import Header from "./components/Header";
import FoodList from "./components/Food/FoodList";
import { useReducer, useState } from "react";
import Order from "./components/Order/Order";

const reducer = (oldState, action) => {
  switch (action.type) {
    case "ADD":
      //we search if there is an item in the list that has the same ID. By doing that, we would
      //know if we need to insert a new item, or only increase it's count
      const indexFound = oldState.food.findIndex((single) => single.id === action.payload.id);

      if (indexFound !== -1) {
        console.log("INSIDE IF");
        const oldItem = oldState.food[indexFound];

        const currentAmount = +oldState.food[indexFound].amount;
        const amountToAdd = +action.payload.amount;

        // setOrderCount((oldState) => oldState + amountToAdd);

        //we create a new item by using the data from the old one, and only changing the amount
        const newItemToBeInserted = {
          ...oldItem,
          amount: currentAmount + amountToAdd,
        };

        //we access the current items list, and then change the item that has the index we need
        const newItems = [...oldState.food];
        newItems[indexFound] = newItemToBeInserted;

        const totalPayAmount = oldState.total + action.payload.price * action.payload.amount;
        return {
          food: newItems,
          total: totalPayAmount,
        };
      } else {
        console.log("INSIDE ELSE");
        // const amountToAdd = +action.payload.amount;
        // setOrderCount((oldState) => oldState + amountToAdd);

        //concat creates a new array which we can use to return to the state object
        const foodItems = oldState.food.concat(action.payload);
        const totalAmount = oldState.total + action.payload.price * action.payload.amount;

        //we cant use push because push method does not return an array, and we need an
        //array to be returned in a state object
        return {
          food: foodItems,
          total: totalAmount,
        };
      }
    case "REMOVE":
      const indexOfItem = oldState.food.findIndex((single) => single.id === action.payload);
      const foundItem = oldState.food[indexOfItem];
      if (foundItem.amount > 1) {
        foundItem.amount -= 1;

        const currentItems = oldState.food;
        currentItems[indexOfItem] = foundItem;
        const newItems = currentItems;
        return {
          food: newItems,
          total: oldState.total - foundItem.price,
        };
      } else {
        const updatedArray = oldState.food.filter((single) => single.id !== action.payload);
        return {
          food: updatedArray,
          total: oldState.total - foundItem.price,
        };
      }

    default:
      return oldState;
  }
};

export default function App() {
  const [orderState, dispatch] = useReducer(reducer, { food: [], total: 0 });
  const [openOrder, setOpenOrder] = useState(false);

  const addItem = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const toggleOrderModal = () => {
    setOpenOrder((oldState) => !oldState);
  };

  return (
    <>
      <Header onClick={toggleOrderModal} orderCount={orderState} />
      <Description />
      <FoodList onAdd={addItem} />
      {openOrder && <Order onClose={toggleOrderModal} onAdd={addItem} onRemove={removeItem} list={orderState} />}
    </>
  );
}
