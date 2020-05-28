import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../../../utils/httpFunctions";
import Product from "../Product/product";
import { Sort } from "../../../sort/sort";
import { SideNav } from "../../../sideNav/sideNavlist";

export const DisplayProducts = (props) => {
  const [items, setItems] = useState([]);
  const { category } = props.match.params;
  useEffect(() => {
    fetchProducts(category)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [category]);
  return (
    <>
      <div className="App">
        <div className="sideNav item">
          <SideNav />
        </div>
        <div className="item-3 item ">
          <Sort />
        </div>
        <div className="products item">
          <Product items={items} />
        </div>
      </div>
    </>
  );
};
