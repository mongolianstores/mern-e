import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import { detailsOrder } from '../../Redux/actions/orderActions/orderActions';
import { CartFullWrapper, CartItemsWrapper, LinkTo, OrderSum, OrderSummaryWrapper, PaymentWrapper, PlaceOrderWrapper, ShippingAndOrder, ShippingWrapper } from '../PlaceOrderPage/styles.placeorder';
import MessageBox from '../../components/MessageBox/MessageBox';
import axios from 'axios';
import {PayPalButton} from 'react-paypal-button-v2';


const OrderPage = (props) => {

const orderDetails = useSelector(state=> state.orderDetails);

const {order, loading, error} = orderDetails;

const [sdkReady, setSdkReady] = useState(false);



    const dispatch = useDispatch();

    const orderId = props.match.params.id;

    useEffect(()=>{

        const addPaypalScript =async()=>{
            const {data} = await axios.get("/api/config/paypal")
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
            script.async = true;
            script.onload = () =>{
                setSdkReady(true)
            };
            document.body.appendChild(script);
        };

        if(!order){

            dispatch(detailsOrder(orderId));
        }else{
            if(!order.isPaid){
                if(!window.paypal){
                    addPaypalScript();
                }else{
                    setSdkReady(true);
                }
            }
        }

    },[sdkReady, order, orderId, dispatch]);


    const successPaymentHandler = ()=>{

    }


    return loading ? (
        <LoadingBox/>
    ):error?(
        <MessageBox>{error}</MessageBox>
    ):(
         <>

<h1>Order: {order._id}</h1>
        <PlaceOrderWrapper>
           <div style={{display:"flex", flexDirection:"column", flex:"0.95"}}>
            <ShippingAndOrder>
                <ShippingWrapper>
                    <h2 style={{marginBottom:"15px"}}>Shipping</h2>
                    <p style={{display:"flex", flexDirection:"column"}}>
                        <span style={{fontSize:"25px"}}>Name: <span style={{marginLeft:"15px", fontSize:"20px"}}>{order.shippingAddress.fullName}</span></span>
                        
                        <span style={{fontSize:"25px"}}>
                            Address: <span style={{marginLeft:"15px", fontSize:"20px"}}>{order.shippingAddress.address}</span>
                        </span>
                        <span style={{fontSize:"25px"}}>
                            City:<span style={{marginLeft:"15px", fontSize:"20px"}}>{order.shippingAddress.city}</span>
                        </span>
                        <span style={{fontSize:"25px"}}>
                            Postal Code:<span style={{marginLeft:"15px", fontSize:"20px"}}>{order.shippingAddress.postalCode}</span>
                        </span >
                        <span style={{fontSize:"25px"}}>Country:<span style={{marginLeft:"15px", fontSize:"20px"}}>{order.shippingAddress.country}</span></span>

            {
            order.isDelivered? 
            
            <div style={{backgroundColor:"#5CB85C",marginTop:"10px", padding:"0.1rem"}}>
                Delivered at {order.deliveredAt}
            </div>
                              :
            <div style={{backgroundColor:"#FF2A2A",marginTop:"10px", padding:"0.1rem"}}>
                    Not Delivered
            </div>
            
            }

                    </p>
                </ShippingWrapper>


                <PaymentWrapper>
                    <h2 style={{marginBottom:"15px"}}>Payment</h2>
                    <p>
                        <strong>Method:</strong>
                        {order.paymentMethod}
                    </p>
                    {
                        order.isPaid ? (
                            <div style={{backgroundColor:"#5CB85C",marginTop:"10px", padding:"0.1rem"}}>
                                Paid at {order.paidAt}
                            </div>
                        ):(
                            <div style={{backgroundColor:"#FF2A2A",marginTop:"10px", padding:"0.1rem"}}>
                                Not Paid
                            </div>
                        )
                    }
                </PaymentWrapper>
            </ShippingAndOrder>

                <div style={{display: " flex", flexDirection:"column", border:"1px solid lightgray", padding:"15px"}}>
                    <h2>Order Items</h2>
                   
                    <CartFullWrapper>
                        {order.orderItems.map(item=>(
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
                                    <div>${order.itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>

                            <li>
                                <div style={{display: "flex", justifyContent:"space-between"}}>
                                    <div style={{marginRight:"15px"}}>Shipping:</div>
                                    <div>${order.shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>

                            <li>
                                <div style={{display: "flex",justifyContent:"space-between"}}>
                                    <div  style={{marginRight:"15px"}}>Tax:</div>
                                    <div>${order.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>

                            <li >
                                <div style={{
                                    display: "flex",justifyContent:"space-between",marginBottom:"1.5rem"}}>
                                    <div style={{marginRight:"15px"}}>Order Total:</div>
                                    <div>
                                        <strong>
                                        ${order.totalPrice.toFixed(2)}
                                        </strong>
                                        </div>
                                </div>
                            </li>
                                    {
                                        !order.isPaid   &&(
                                            <li>
                                                {!sdkReady ? (<LoadingBox>

                                                </LoadingBox>):(
                                                    <div style={{marginBottom:"1.5rem"}}>
                                                    <PayPalButton 
                                                    
                                                    amount={order.totalPrice}
                                                    onSuccess={successPaymentHandler}
                                                    />
                                                    </div>
                                                )}
                                            </li>
                                        )  
                                    }
                        </ul>
                    </OrderSum>
                </OrderSummaryWrapper>
            
        </PlaceOrderWrapper> 
        </>
    )
}



export default OrderPage