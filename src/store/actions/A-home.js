import * as ActionType from './ActionTypes';

export const AddToCart = (pay) => {
    // console.log("Hi!! action",pay)
    return {
        type: ActionType.ADD_TO_CART,
        payload: pay
    };
};

export const removeToCart = () => {
    // console.log("Hi!! action",pay)
    return {
        type: ActionType.REMOVETOCART,
    };
};

export const add = (pay) => {
    return {
        type: ActionType.ADD,
        payload: pay
    }
   
}