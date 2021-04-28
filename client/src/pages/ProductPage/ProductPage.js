import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import { AddToCartButton, IMG, ProductCenter, ProductCheckOut, ProductDescription, ProductLeft, ProductName, ProductPageWrapper, ProductPrice, ProductWrapper } from './styles.productpage';
import {useSelector, useDispatch} from 'react-redux';
import {productItem} from '../../Redux/actions/productActions/productActions';
import MessageBox from '../../components/MessageBox/MessageBox';
import LoadingBox from '../../components/LoadingBox/LoadingBox';


const ProductPage = (props) => {

    const [qty, setQty] = useState(1)

     const state = useSelector(state => state.productDetail);



     const {product,error,loading} = state;


     
const dispatch = useDispatch();

const productId = props.match.params.id;

     useEffect(()=>{
        dispatch(productItem(productId))
     },[productId,dispatch])


const addToCartHandler=()=>{
    props.history.push(`/cart/${productId}?qty=${qty}`);
}

    return (
    <>
    { loading?(
            <LoadingBox/>
        ):error?(
           <MessageBox error={error}/>
        ):(
            <ProductPageWrapper>
            <Link to="/">
                Go Back
            </Link>

            <ProductWrapper>
               
                <ProductLeft>
                    <IMG
                        src={product.image}
                        alt={product.name}
                    />
                </ProductLeft>

                <ProductCenter>
                        <ProductName>
                            <h2>{product.name}</h2>
                        </ProductName>

                        <div> 
                            <Rating
                            rating={product.rating} 
                            numReviews={product.numReviews}
                        />
                        </div>

                        <ProductPrice>
                            <h4>Price:<span style={{fontSize:"12px"}} >  ${product.price}</span></h4>
                        </ProductPrice>
                        
                        <ProductDescription>
                              <h4>Description: <span style={{fontSize:"12px"}} >{product.description}</span></h4>
                        </ProductDescription>
                   
                </ProductCenter>

                <ProductCheckOut>
                    <div style={{margin:"1.5rem 0"}}>
                        Price:  <span style={{marginLeft: "25px"}}>${product.price}</span>
                    </div>

                    <div style={{margin:"1.5rem 0"}}>
                        Status: <span style={{marginLeft: "25px"}}>
                            {
                                product.inStock?(
                                    <span >
                                        In Stock
                                    </span>
                                ):(
                                    <span >
                                        Out Of Stock
                                    </span>
                                )
                            }
                        </span>
                    </div>

<CartAddToDiv>
    
    
    <div className="row">
        <div style={{margin:"0 4rem 0  0"}}>
            Qty
        </div>
        <div>
            <select value={qty} onChange={e=>setQty(e.target.value)}>
                {
                    [...Array(product.inStock).keys()].map(x=> (
                        <option key={x+1} value={x+1}>
                            {x+1}
                        </option>
                    ))
                }
            </select>
        </div>
    </div>


                    <AddToCartButton
                     onClick={addToCartHandler}
                     disabled={product.inStock===0}>
                        ADD TO CART
                    </AddToCartButton>

</CartAddToDiv>

                </ProductCheckOut>
            </ProductWrapper>
        </ProductPageWrapper>
        )
                        }
   </>     
    )
}


const CartAddToDiv = styled.div`
    display:flex;
    flex-direction:column;

    & .row{
        display:flex;
        flex-direction:row;
        
    }
`

export default ProductPage;