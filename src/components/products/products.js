import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/httpFunctions";

export const ProductsComponent = (prop) => {
  const { paginateNumber, setItem } = prop;
  useEffect(() => {
    fetchProducts(paginateNumber)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, [paginateNumber, setItem]);
  return null;
};
