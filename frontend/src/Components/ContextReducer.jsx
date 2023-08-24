import React, { createContext, useContext, useReducer } from "react";

//create Context
const cartStateContext = createContext();
const cartDispatchContext = createContext();

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          quantity: action.quantity,
          size: action.size,
          img: action.img,
        },
      ];

    default:
      console.log("No such Data");
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <cartDispatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);

export default CartProvider;
