import * as ActionType from "./ActionTypes";

export const AddToCart = (pay) => {
  // console.log("Hi!! action",pay)
  return {
    type: ActionType.ADD_TO_CART,
    payload: pay,
  };
};

export const Increment = (id) => {
  return {
    type: ActionType.INCREMENT,
    payload: id,
  };
};

export const Decrement = (id) => {
  return {
    type: ActionType.DECREMENT,
    payload: id,
  };
};
