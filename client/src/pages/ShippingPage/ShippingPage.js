import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../../components/CheckOut/CheckOutSteps';
import "./styles.js";
import { ShippingWrapper } from './styles.js';
import {useHistory} from 'react-router-dom';
import { saveShippingAddress } from '../../Redux/actions/cartActions/cartActions';


const ShippingAddress = () => {

    const history = useHistory();

    const cartState = useSelector(state => state.cart);
    const {cartItems,shippingAddress} = cartState;

    const userState = useSelector(state => state.userSignIn);
    const {userInfo} = userState;
   
   
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country );

  
if(!userInfo){
    history.push('/signin')
}

    const dispatch = useDispatch();



const handleSubmit = (e)=>{
    
    e.preventDefault();
   
    dispatch(saveShippingAddress({fullName,address,postalCode,country,city}))

    history.push("/payment")
}

useEffect(()=>{
    if(!userInfo){
        history.push("/login")
    }
},[history,userInfo])

    return (
        <>
            {cartItems?(
                <div>
                <CheckoutSteps step1 step2/>
                <ShippingWrapper>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1>Shipping Address</h1>
                        </div>
                       
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter full name"
                            value={fullName}
                            onChange={e=> setFullName(e.target.value)}
                            required
                        />


                        <label>Address</label>
                        <input 
                            type="text" 
                            placeholder="Enter Address"
                            value={address}
                            onChange={e=> setAddress(e.target.value)}
                            required
                        />

                        <label>City</label>
                        <input 
                            type="text" 
                            placeholder="Enter City"
                            value={city}
                            onChange={e=> setCity(e.target.value)}
                            required
                        />

                        <label>Postal Code</label>
                        <input 
                            type="text" 
                            placeholder="Enter postal code"
                            value={postalCode}
                            onChange={e=> setPostalCode(e.target.value)}
                            required
                        />

                        <label>Country</label>
                        <input 
                            type="text" 
                            placeholder="Enter Country"
                            value={country}
                            onChange={e=> setCountry(e.target.value)}
                            required
                        />

                        <button >Continue</button>

                    </form>
                    </ShippingWrapper>
            </div>
            
            ):(
                <div style={{margin: "5rem", border: "1px solid lightgray",
                padding: "25px",
                backgroundColor:"#f9f3d4",
                borderRadius:"15px"}}>
                  😕Your Cart Is Empty <Link to='/'>Go Back</Link>
                </div>
            )
            }
        </>
    )
}

export default ShippingAddress;