import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducers/contextReducer";

//create Context
const cartStateContext = createContext();
const cartDispatchContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
