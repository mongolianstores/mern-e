import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../../components/CheckOut/CheckOutSteps';
import { ORDER_CREATE_RESET } from '../../Redux/actions/actionConsts/orderConsts';
import { createOrder } from '../../Redux/actions/orderActions/orderActions';
import { CartFullWrapper, CartItemsWrapper, LinkTo, OrderSum, OrderSummaryWrapper, PaymentWrapper, PlaceOrderWrapper, ShippingAndOrder, ShippingWrapper } from './styles.placeorder';


const PlaceOrder = (props) => {

    const cart = useSelector(state=>state.cart);
    
    if(!cart.paymentMethod){
        props.history.push("/payment")
    }

    const orderCreate = useSelector(state=> state.orderCreate);

    const {loading, success, error, order} = orderCreate;


    const toPrice = (num)=>Number(num.toFixed(2));
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c)=> a+c.qty * c.price, 0));


    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);

    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);

    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const dispatch = useDispatch();

    const placeOrderHandler = ()=>{
        dispatch(createOrder({...cart, orderItems: cart.cartItems}))
    }

    useEffect(()=>{
        if(success){
            props.history.push(`/order/${order._id}`)
            dispatch({type: ORDER_CREATE_RESET});
        }
    },[success, order, props.history, dispatch]);



    return (
        <>
        
        <CheckoutSteps step1 step2 step3 step4/>
         
        <PlaceOrderWrapper>
           <div style={{display:"flex", flexDirection:"column", flex:"0.95"}}>
            <ShippingAndOrder>
                <ShippingWrapper>
                    <h2 style={{marginBottom:"15px"}}>Shipping</h2>
                    <p style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"25px"}}>Name: <span style={{marginLeft:"15px", fontSize:"20px"}}>{cart.shippingAddress.fullName}</span></span>
                        
                        <span style={{fontSize:"25px"}}>
                            Address: <span style={{marginLeft:"15px", fontSize:"20px"}}>{cart.shippingAddress.address}</span>
                        </span>
                        <span style={{fontSize:"25px"}}>
                            City:<span style={{marginLeft:"15px", fontSize:"20px"}}>{cart.shippingAddress.city}</span>
                        </span>
                        <span style={{fontSize:"25px"}}>
                            Postal Code:<span style={{marginLeft:"15px", fontSize:"20px"}}>{cart.shippingAddress.postalCode}</span>
                        </span >
                        <span style={{fontSize:"25px"}}>Country:<span style={{marginLeft:"15px", fontSize:"20px"}}>{cart.shippingAddress.country}</span></span>
                    </p>
                </ShippingWrapper>


                <PaymentWrapper>
                    <h2 style={{marginBottom:"15px"}}>Payment</h2>
                    <p>
                        <strong>Method:</strong>
                        {cart.paymentMethod}
                    </p>
                </PaymentWrapper>
            </ShippingAndOrder>

                <div style={{display: " flex", flexDirection:"column", border:"1px solid lightgray", padding:"15px"}}>
                    <h2>Order Items</h2>
                   
                    <CartFullWrapper>
                        {cart.cartItems.map(item=>(
                            <div key={item.product}>
                                <CartItemsWrapper>
                                    <div>
                                        <img
                                        style={{marginRight:"25px", width:"250px"}}
                                        src={item.image}
                                        alt={item.name}
                                        />
                                    </div>
                                    <div>
                                        <LinkTo to={`/product/${item.product}`} style={{outline:"none", textDecoration:"none", color:"gray", marginRight:"15px"}}>{item.name}</LinkTo>
                                    </div>
                                    <div style={{marginRight:"15px"}}>
                                        {item.qty} x ${item.price}=${item.qty*item.price}
                                    </div>
                                </CartItemsWrapper>
                            </div>
                        ))}
                    </CartFullWrapper>
                    
                </div>

                </div>


                <OrderSummaryWrapper>
                    <OrderSum>
                        <ul style={{listStyle:"none", width:"100%"}}>
                            <li>
                                <h2 style={{marginBottom:"15px"}}>Order Summary</h2>
                            </li>
                            <li>
                                <div style={{display: "flex",justifyContent:"space-between"}}>
                                    <div style={{marginRight:"15px"}}>Items:</div>
                                    <div>${cart.itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>

                            <li>
                                <div style={{display: "flex", justifyContent:"space-between"}}>
                                    <div style={{marginRight:"15px"}}>Shipping:</div>
                                    <div>${cart.shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>

                            <li>
                                <div style={{display: "flex",justifyContent:"space-between"}}>
                                    <div  style={{marginRight:"15px"}}>Tax:</div>
                                    <div>${cart.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>

                            <li >
                                <div style={{
                                    display: "flex",justifyContent:"space-between"}}>
                                    <div style={{marginRight:"15px"}}>Order Total:</div>
                                    <div>
                                        <strong>
                                        ${cart.totalPrice.toFixed(2)}
                                        </strong>
                                        </div>
                                </div>
                            </li>

                            <div>
                                <button onClick={placeOrderHandler}
                                disabled={cart.cartItems.length === 0}
                                >
                                    Place Order
                                </button>
                            </div>
                            {loading && <div>Loading...</div>
                            }
                            {error && <div>ERROR</div>}
                        </ul>
                    </OrderSum>
                </OrderSummaryWrapper>
            
        </PlaceOrderWrapper> 
        </>
    )
}

export default PlaceOrder