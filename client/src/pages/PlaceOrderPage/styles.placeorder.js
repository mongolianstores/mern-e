import styled from 'styled-components/macro';
import {Link as LinkR} from 'react-router-dom';





export const ShippingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    padding: 10px;
`

export const PaymentWrapper = styled.div`
    margin-top:25px;
    margin-bottom:20px;
    padding:10px;
    border: 1px solid lightgray;
`
export const PlaceOrderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;

    @media(max-width: 1100px){
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
`
export const ShippingAndOrder  = styled.div`
    display: flex;
    flex-direction: column;
`
export const CartFullWrapper = styled.div`
    
`
export const CartItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LinkTo = styled(LinkR)`

    &:hover{
        text-decoration: underline;
    }

`

export const OrderSummaryWrapper = styled.div`
    min-width: 400px;
    padding: 25px;
    border: 1px solid lightgray;
    max-height:350px;
`
export const OrderSum = styled.div`
    display: flex;

    @media(max-width: 1100px){
       margin-top: 30px;
    }

    & button{
        display: flex;
        margin: 1rem 0rem;
        justify-content: center;
        outline:none;
        padding: 5px;
        background-color:#F3B605;
        outline: none;
        text-decoration: none;
        border: 1px solid lightgray;
        cursor: pointer;
        border-radius: 5px;
        font-size: 15px;
        width:100%;
        &:active{
            color:white;
            background-color: black;
        }
    }
`
export const OrderSumMain = styled.div`
    width: 100%;
`