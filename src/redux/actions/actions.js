import { ACTION_TYPES } from "./actionTypes";

export const paginate = (num) => ({
  type: ACTION_TYPES.PAGINATE,
  num,
});
