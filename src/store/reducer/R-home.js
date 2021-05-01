import * as ActionType from '../actions/ActionTypes';

const initialstate = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
}

const Reducer = (state = initialstate, action) => {
    console.log(state)
    console.log("hi reducer !!!",action)
    switch(action.type) {
        case ActionType.ADD_TO_CART:
            const {product ,Quantity} = action.payload;
            const Check = state.products.find(pr => pr.id === product.id);
            if(Check){
                return state;
            } else {
                const Tprice = state.totalPrice + product.DiscountPrice * Quantity;
                console.log(Tprice)
            }


            case ActionType.ADD:
              return {products: [...state.products, action.payload]}
    };
    return state;
};
export default Reducer;