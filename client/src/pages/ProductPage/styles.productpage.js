import styled from 'styled-components/macro';


export const ProductPageWrapper = styled.div`
padding:  2.5rem;
`
export const ProductWrapper= styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 1090px){
        display: flex;
        flex-direction: column;
    }
 

`
export const ProductLeft = styled.div`
    display: flex;
    padding: 25px;
`
export const IMG = styled.img`
    min-width: 150px;
    object-fit: contain;
    max-width: 450px;
`
export const ProductCenter = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;

`
export const ProductCheckOut = styled.div`
    display: flex;
    flex-direction:column;
    flex: 0.4;
    
`

export const ProductName = styled.div`
    margin: 1.5rem 0;
    font-size: 1.2rem;
    font-weight: normal;
`
export const ProductPrice = styled.div`
    font-size: 15px;
    margin: 1.5rem 0;

`
export const ProductDescription = styled.span`
    font-size: 1.2rem;
    color: black;
`
export const AddToCartButton = styled.button`
    color: white;
    background-color: black;
    outline: none;
    text-decoration: none;
    padding:12px;
    border: 1px solid black;
    cursor: pointer;
    margin-top: 2.5rem;
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