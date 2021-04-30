import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {cartAddItem, cartRemove} from '../../Redux/actions/cartActions/cartActions';
import {FiTrash} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { CartEmpty, CartItem, CartItemsWrapper, CARTMAINWRAPPER, CheckOutButton, IMG, SubTotal } from './styles.cartpage';
import './cartPage.css'

const CartPage = ({match, location, history}) => {

    const productId = match.params.id;


const cartItems = useSelector((state)=> state.cart.cartItems);

const qty = location.search ? Number(location.search.split("=")[1]) : 1;



const dispatch = useDispatch();

    useEffect(()=>{
        if(productId){
            dispatch(cartAddItem(productId, qty))
        }
       },[dispatch, qty, productId ]);


const checkoutHandler = ()=>{
        history.push("/signin?redirect=shipping")
    

};

const removeFromCartHandler = (productId)=>{
    dispatch(cartRemove(productId))
}
 



    return (
        <CARTMAINWRAPPER >
            <div>
             <h1 style={{padding:"20px"}}>Shopping Cart</h1>
             <div style={{display:"flex", justifyContent:"space-around", padding:"25px"}}>
                {cartItems.length === 0 ? (<CartEmpty>😕Your Cart Is Empty <Link to='/'>Go Back</Link></CartEmpty>):(
                    <CartItemsWrapper>
                        {cartItems.map(item=>(
                            <div key={item.product}>
                                <CartItem>
                                    <div>
                                        <IMG
                                        style={{marginRight:"25px"}}
                                        src={item.image}
                                        alt={item.name}
                                        />
                                    </div>
                                    <div>
                                        <Link to={`/product/${item.product}`} style={{outline:"none", textDecoration:"none", color:"gray", marginRight:"15px"}}>{item.name}</Link>
                                    </div>
                                    <div style={{marginRight:"15px"}}>
                                        ${item.price}
                                    </div>
                                    <div>
                                    <select value={item.qty} onChange={e=>dispatch(cartAddItem(item.product, Number(e.target.value)))}>
                                    {
                                        [...Array(item.inStock).keys()].map(x=> (
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))
                                    }
                                    </select>
                                </div>

                                    <div style={{marginLeft:"15px"}}>
                                        <FiTrash
                                        style={{cursor:"pointer"}}
                                            onClick={()=>removeFromCartHandler(item.product)}
                                        />
                                    </div>
                                </CartItem>
                            </div>
                        ))}
                    </CartItemsWrapper>
                 

                )}
            </div>
                                        
            </div>
            <SubTotal>
                <div>
                    <div>
                    <div>
                        <div>
                            <h2>Subtotal ({cartItems.reduce((a,c)=> a+c.qty,0)} items): $ {cartItems.reduce((a,c)=> a+c.price * c.qty, 0)}</h2>
                        </div>
                        <div>
                            <CheckOutButton onClick={checkoutHandler} disabled={cartItems.length===0} className="">
                                Proceed to checkout
                            </CheckOutButton>
                        </div>
                    </div>
                    </div>
                </div>
            </SubTotal>
        </CARTMAINWRAPPER>
    )
}

export default CartPage;