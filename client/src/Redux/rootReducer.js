import {combineReducers} from 'redux';
import { cartReducer } from './reducers/cartReducers/cartReducer';
import { orderCreateReducer, orderDetailsReducer } from './reducers/orderReducers/orderReducers';
import {productDetailReducer, productListReducer} from './reducers/productReducers/productReducers';
import { userDetailsReducer, userRegisterReducer, userSignInReducer, userUpdateProfileReducer } from './reducers/userReducers/userReducers';


const reducer = combineReducers({
    productList: productListReducer ,
    productDetail: productDetailReducer,
    cart:cartReducer,
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer
})
export default reducer;