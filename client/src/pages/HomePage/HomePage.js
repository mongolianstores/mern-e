import React, { useEffect} from 'react'
import Product from '../../components/Product/Product';
import MessageBox from '../../components/MessageBox/MessageBox';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import {useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../../Redux/actions/productActions/productActions';
import './homepage.css'




const HomePage = () => {

    const state = useSelector(state => state.productList);
    const {products, error, loading} = state;

    

    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(listProducts())
    },[ dispatch]);




    return (
        <>
    {loading?(
        <LoadingBox/>
    ):error?(
       <MessageBox error={error}/>
    ):(
        <div className="card-wrapper">
        {products.map(product=>(
               <Product 
                  key={product._id}
                  product={product}
               />
            ))
        }
    </div>
    )}

       
        </>
    )
}

export default HomePage
