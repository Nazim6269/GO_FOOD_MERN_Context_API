import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

//initialState
export const initialState = {
  cart: [],
};

//reducer function
export const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
