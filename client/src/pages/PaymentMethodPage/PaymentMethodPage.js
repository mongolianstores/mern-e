import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../../components/CheckOut/CheckOutSteps';
import { savePaymentMethod } from '../../Redux/actions/cartActions/cartActions';
import { PaymentInput, PaymentWrapper } from './styles.paymentmethod';

const PaymentMethodPage = (props) => {

    const cartState = useSelector(state=> state.cart);
    const {shippingAddress} = cartState;
    
    if(!shippingAddress.address){
        props.history.push("/shipping")
    }

    const userState = useSelector(state => state.userSignIn);
    const {userInfo} = userState;

    const [paymentMethod, setPaymentMethod] = useState('');


    const dispatch = useDispatch();


    const handleSubmit = (e)=>{
        e.preventDefault();
     
        dispatch(savePaymentMethod(paymentMethod));
        
        props.history.push("/placeorder");

    };

    useEffect(()=>{
        if(!userInfo){
            props.history.push('/signin')
        }
    },[props.history, userInfo])
    
    return (
        <PaymentWrapper>
            <CheckoutSteps step1 step2 step3/>
           
            <form className="form" onSubmit={handleSubmit}>
                <h1 style={{marginBottom:"25px"}}>Payment Method</h1>
<PaymentInput>
                <input
                
                    type="radio"
                    id="paypal"
                    value="Paypal"
                    name="paymentMethod"
                    required
                    onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                <label htmlFor="paypal">Paypal</label>
</PaymentInput>
<PaymentInput>

                <input
                    type="radio"
                    id="stripe"
                    value='Stripe'
                    name="paymentMethod"
                    required
                    onChange={(e)=>setPaymentMethod(e.target.value)}
                />
                <label htmlFor="stripe">Stripe</label>
</PaymentInput>
                <button disabled={!paymentMethod}>Continue</button>
            
            </form>
        </PaymentWrapper>
    )
}

export default PaymentMethodPage