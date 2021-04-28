import { CART_ADD_ITEM, CART_SAVE_SHIPPING_ADDRESS, DELETE_ITEM, SET_PAYMENT } from "../../actions/actionConsts/cartConsts";
import { CART_EMPTY } from "../../actions/actionConsts/orderConsts";

export const cartReducer = (state={cartItems:[]},action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
                
            const item = action.payload;   
            const existItem = state.cartItems.find(x=> x.product === item.product)  //product here is MONGODB ._id

            if(existItem){
                //replace old with newer cartItem
                return{
                    ...state,
                    cartItems: state.cartItems.map(x=>x.product === existItem.product? item:x),
                } 
            }else{
                return{
                ...state,
                cartItems: [...state.cartItems, item]} //concatenate cartItems with new one ...state.cartItems returns existing items and *item adds it 
            }
        case DELETE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(x=> x.product !== action.payload ),
                
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingAddress: action.payload
            }
        case SET_PAYMENT:
            return{
                ...state,
                paymentMethod: action.payload
            }
        case CART_EMPTY:
            return{
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}
