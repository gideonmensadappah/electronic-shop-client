import { cartReducer } from "./cartReducer";
import { productReducer } from "./productsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  productReducer,
  cartReducer,
});
