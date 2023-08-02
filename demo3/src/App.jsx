import Description from "./components/Elements/Description";
import Header from "./components/Elements/Header";
import FoodList from "./components/Food/FoodList";
import Order from "./components/Order/Order";

import { useReducer, useState } from "react";
import { createPortal } from "react-dom";

const reducer = (oldState, action) => {
  switch (action.type) {
    case "ADD":
      //we search if there is an item in the list that has the same ID. By doing that, we would
      //know if we need to insert a new item, or only increase the item count
      const indexFound = oldState.food.findIndex((single) => single.id === action.payload.id);

      //item already exists in the order, so only increase the count
      if (indexFound !== -1) {
        const oldItem = oldState.food[indexFound];
        const newAmount = +oldItem.amount + +action.payload.amount;
        const totalPayAmount = oldState.total + action.payload.price * action.payload.amount;

        //we create a new item by using the data from the old one, and only changing the amount
        const newItemToBeInserted = {
          ...oldItem,
          amount: newAmount,
        };

        //we access the current items list, and then change the item that has the index we need
        const updatedItems = [...oldState.food];
        updatedItems[indexFound] = newItemToBeInserted;

        return {
          food: updatedItems,
          total: totalPayAmount,
        };
      }
      //item does not exist in the list, so we need to insert it
      else {
        //concat creates a new array which we can use to return to the state object
        //we cant use push because push method does not return an array, and we need an
        //array to be returned in a state object
        const updatedItems = oldState.food.concat(action.payload);
        const totalPayAmount = oldState.total + action.payload.price * action.payload.amount;

        return {
          food: updatedItems,
          total: totalPayAmount,
        };
      }
    case "REMOVE":
      const indexOfItem = oldState.food.findIndex((single) => single.id === action.payload);
      const oldItem = oldState.food[indexOfItem];

      //if item amount is bigger than 1, just decrese the amount
      if (oldItem.amount > 1) {
        oldItem.amount -= 1;
        const updatedItems = oldState.food;
        updatedItems[indexOfItem] = oldItem;

        return {
          food: updatedItems,
          total: oldState.total - oldItem.price,
        };
      }
      //if item amount is 1, remove the whole item from the list
      else {
        const updatedItems = oldState.food.filter((single) => single.id !== action.payload);
        return {
          food: updatedItems,
          total: oldState.total - oldItem.price,
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
      {createPortal(
        openOrder && <Order onClose={toggleOrderModal} onAdd={addItem} onRemove={removeItem} list={orderState} />,
        document.getElementById("modal")
      )}
    </>
  );
}
