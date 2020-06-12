import { ACTION_TYPES } from "../actions/actionTypes";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      let checkIfIsInCart = state.indexOf(action.productId) > -1;
      if (!checkIfIsInCart) return [...state, action.productId];
      return [...state];
    case ACTION_TYPES.GET_PRODUCTS:
      return [...state];
    default:
      return state;
  }
};
