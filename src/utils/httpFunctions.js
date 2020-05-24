import axios from "axios";

export const fetchProducts = (paginateNumber) => {
  return axios.get(`http://localhost:5000/shop/skip=${paginateNumber}`);
};
