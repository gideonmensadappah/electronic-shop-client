import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { NavBar } from "./components/navbar/navbar";
import { Shop } from "./components/shop/shopHome/shope";
import { LoginSystem } from "./components/loginSystem/login/login";
import { shopCheckOut } from "./components/shop/checkout/checkOut";
import { DisplayProducts } from "./components/shop/shopHome/displayHomeProducts/products";
import { ProductModal } from "./components/products/ProductModal";
import { ShopppingCart } from "./components/shop/cart/shoppingCart";

function App() {
  return (
    <>
      <div className="header item ">
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route
          exact
          path="/shop/category/:category"
          component={DisplayProducts}
        />
        <Route
          path="/shop/category/:category/:id/modal"
          component={ProductModal}
        />
        <Route path="/shop/cart" component={ShopppingCart} />
        <Route path="/user/login" component={LoginSystem} />
      </Switch>
    </>
  );
}

export default App;
