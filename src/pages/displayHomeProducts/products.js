import React, { useState } from "react";
import { ProductsComponent } from "../../components/products/products";
import Product from "../Product/product";
export const DisplayProducts = () => {
  const [paginateNumber, setPaginateNumber] = useState(0);
  const [items, setItems] = useState([]);

  const handlePaginate = () => {
    setPaginateNumber(paginateNumber + 2);
  };
  return (
    <>
      <ProductsComponent setItem={setItems} paginateNumber={paginateNumber} />
      <Product items={items} />
      <input
        type="button"
        onClick={handlePaginate}
        className="btn btn-primary mt-3"
        value="load more..."
      />
    </>
  );
};
