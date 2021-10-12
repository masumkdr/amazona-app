import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
    console.log(state)
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existITem = state.cartItems.find(x => x.product === item.product);
            if (existITem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existITem.product ? item : x)

                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            console.log(action.payload)
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.product !== action.payload),
            }
        default:
            return state;
    }
}