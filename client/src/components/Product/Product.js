import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './product.css';


const Product = ({product}) => {
    return (
        <div>
             <div key={product._id} className="card">
                            <Link to={`/product/${product._id}`}>
                                <img className='imga' src={product.image} alt={product.name}/>
                            </Link>

                            <div className="body">
                                <Link className='Link'
                                to={`/product/${product._id}`}>
                                    <h2>{product.name}</h2>
                                </Link>
                            </div>

                        <div className="description">
                            <Link className="Link" to={`/product/${product._id}`}>
                            <span>{product.description}</span>
                            </Link>
                        </div>


                         
            <Rating 
                numReviews ={product.numReviews} 
                rating={product.rating}
            />


                            <div className="price">
                                <span>${product.price}</span>
                            </div>
                        </div>
        </div>
    )
}

export default Product
