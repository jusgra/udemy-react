import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      //   console.log(action.payload);
      const existingItemIndex = state.items.findIndex((single) => single.id === action.payload.id);
      const existingItem = state.items[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      const updatedAmount = state.totalAmount + action.payload.price * action.payload.amount;
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    case "REMOVE":
      const existingIndex = state.items.findIndex((single) => single.id === action.payload);
      const existing = state.items[existingIndex];
      const updatedAmount2 = state.totalAmount - existing.price;
      let updatedItems2;
      if (existing.amount === 1) {
        updatedItems2 = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = { ...existing, amount: existing.amount - 1 };
        updatedItems2 = [...state.items];
        updatedItems2[existingIndex] = updatedItem;
      }
      console.log(updatedAmount2);
      return {
        items: updatedItems2,
        totalAmount: updatedAmount2,
      };
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", payload: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
