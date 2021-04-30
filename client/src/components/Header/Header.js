import React from 'react'
import { Div, HeaderComp, HeaderLeft, HeaderRight, HeaderWrapper, LinkTo } from './styles.header.js';
import {BiCart} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {BiLogOut} from 'react-icons/bi'
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import { signOutUser } from '../../Redux/actions/userActions/userActions.js';
import {FiUser} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';


const Header = () => {

    const userState = useSelector(state => state.userSignIn);
    const{userInfo} = userState;


    const cartState = useSelector(state => state.cart)
    const {cartItems} = cartState;

    const dispatch = useDispatch();

    const history = useHistory();

    const signOutHandler = ()=>{
        dispatch(signOutUser());
        history.push("/");
    }

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <LinkTo to="/">
                    MernShop
                </LinkTo>
            </HeaderLeft>

            <HeaderRight>
                <Div>
                    <LinkTo to='/cart' >
                       <BiCart/> Cart
                       {cartItems.length >0 && (
                           <SPAN >{cartItems.length}</SPAN>
                       )}
                    </LinkTo>
                </Div>
                <Div>
                    {
                    !userInfo?(
                <LinkTo to='/signin'>
                    <AiOutlineUser/> Sign In
                </LinkTo>
                    ):(
                        <div style={{display:"flex", alignItems:"center"}}>
                <LinkTo style={{marginRight:"15px"}} to="/profile" >
                    <FiUser/> Profile
                </LinkTo>
                <HeaderComp onClick={signOutHandler}>
                    <BiLogOut/> Log Out
                </HeaderComp>
              
                </div>
                    )}
                   
                </Div>
            </HeaderRight>
        </HeaderWrapper>
    )
}

const SPAN = styled.span`
    margin-left:0.3rem;
    font-size:1.2rem;
 
    border-radius:50%;
    padding:0.2rem 0.6rem;
    color:#fff;
    background-color:#f02020;
`

export default Header