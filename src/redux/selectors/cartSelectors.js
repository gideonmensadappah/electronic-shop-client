import { createSelector } from "reselect";
import { cartReducer } from "../reducers/cartReducer";
const products = (state) => state.productReducer;
const cartIDs = cartReducer.state;

const isInCart = (barcode) => Boolean(cartIDs.find((id) => id === barcode));
// const cartIds = createSelector(cartIDs, (idsInCart) => idsInCart);

export const cartProducts = createSelector(products, (productsItems) =>
  productsItems.filter((prod) => isInCart(prod.barcode))
);
