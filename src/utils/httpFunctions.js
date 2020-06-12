import axios from "axios";

export const fetchCategories = () => {
  return axios.get(`http://localhost:5000/shop/`);
};

export const fetchProducts = (category, offsetNum, fetchNext) => {
  return axios.get(
    `http://localhost:5000/shop/category/${category}/offsetNum=${offsetNum}&fetchNext=${fetchNext}`
  );
};
