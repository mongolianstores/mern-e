import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './rootReducer';

const cartItemsFromStorage = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]
const userInfoFromStorage = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")): null
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")? JSON.parse(localStorage.getItem("shippingAddress")):{}
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")? JSON.parse(localStorage.getItem("paymentMethod")):{}


const initialState={
    userSignIn:{userInfo: userInfoFromStorage},
    userRegister:{userInfo: userInfoFromStorage},
    cart:{
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage
    },
    
};

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))


export default store;