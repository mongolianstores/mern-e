import {CART_ADD_ITEM, CART_SAVE_SHIPPING_ADDRESS, DELETE_ITEM, SET_PAYMENT} from '../actionConsts/cartConsts';
import axios from 'axios';

export const cartAddItem = (productId,qty)=>async(dispatch,getState)=>{
    const {data} = await axios.get(`/api/products/${productId}`);
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            inStock: data.inStock,
            product: data._id,
            qty,
        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
}

export const cartRemove = (productId)=>async(dispatch,getState)=>{
    
    dispatch({
        type:DELETE_ITEM,
        payload:productId    
    })
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const saveShippingAddress = (data)=>async(dispatch)=>{
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    })
    localStorage.setItem("shippingAddress", JSON.stringify(data));

}

export const savePaymentMethod = (paymentMethod)=>(dispatch)=>{
    dispatch({
        type: SET_PAYMENT,
        payload:paymentMethod
    })

    localStorage.setItem("paymentMethod", JSON.stringify(paymentMethod));
}