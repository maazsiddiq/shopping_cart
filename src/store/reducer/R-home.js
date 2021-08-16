import * as ActionType from "../actions/ActionTypes";

const initialstate = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const Reducer = (state = initialstate, action) => {
  console.log(state);
  console.log("hi reducer !!!", action);
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      const CHECK = state.products.find((pr) => {
        return pr._id === action.payload._id;
      });
      console.log(CHECK, "check=======");
      if (CHECK) {
        console.log("Products ==>>", state.products);
        let products = [];
        state.products.forEach((product) => {
          if (product._id == action.payload._id) {
            product.Quantity = product.Quantity + action.payload.Quantity;
          }
          products.push(product);
        });
        return { products: products };
      } else {
        return { products: [...state.products, action.payload] };
      }

    case ActionType.INCREMENT:
      const findpro = state.products.find(
        (pro) => pro._id === action.payload._id
      );
      const index = state.products.findIndex(
        (pro) => pro._id === action.payload._id
      );
      findpro.payload.Quantity += 1;
      state.products[index] = findpro;
      return {
        ...state,
        totalPrice: state.totalPrice + findpro.DiscountPrice,
        totalquantities: state.totalQuantities + 1,
      };
  }
  return state;
};
export default Reducer;
