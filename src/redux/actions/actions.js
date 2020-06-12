import { ACTION_TYPES } from "./actionTypes";

export const addToCart = (productId) => ({
  type: ACTION_TYPES.ADD_TO_CART,
  productId,
});
export const paginate = (num) => ({
  type: ACTION_TYPES.PAGINATE,
  num,
});
export const getProducts = (products) => ({
  type: ACTION_TYPES.GET_PRODUCTS,
  products,
});
