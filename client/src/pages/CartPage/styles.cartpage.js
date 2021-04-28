import styled from 'styled-components/macro';


export const CartItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const CartItem = styled.div`
    display: flex;
    align-items: center;    
    flex: 1;
    justify-content:space-around;
`   
export const IMG = styled.img`
    width: 10rem;
    object-fit: contain;
`
export const CARTMAINWRAPPER = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width:1100px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const SubTotal = styled.div`
display: flex;
margin-top: 10px;
box-shadow: 1px 1px 10px darkgray;
padding: 25px;
min-width: 450px;
max-height: 250px;
    @media (max-width: 1100px){
        margin: 70px 0 ;
    }
`
export const CheckOutButton = styled.button`
    color: white;
    background-color: black;
    outline: none;
    text-decoration: none;
    padding:12px;
    border: 1px solid black;
    cursor: pointer;
    margin-top: 2rem;
    &:active{
        color: black;
        background-color: white;
    }
    &:disabled{
        background-color: darkgray;
        color: white;
        border: black;
    }
`
export const CartEmpty = styled.div`
    border: 1px solid lightgray;
    padding: 25px;
    background-color:#f9f3d4 ;
    border-radius:15px;
`