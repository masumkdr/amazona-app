import React from 'react';
import Rating from './Rating';
import {Link} from 'react-router-dom';

export default function Product(props) {
    const {product} = props;
    return (
        <div className="card" key={product._id}>
                  <Link to={`/product/${product._id}`}>

                    <img src={product.image} alt={product.name} className="medium" />
                  </Link>
                  <div className="card-body">
                    <Link to={`/product/${product._id}`}>
                      <h2>{product.name}</h2>
                    </Link>
                    <Rating 
                    rating={product.rating} 
                    numReviews={product.numReviews}
                    />
                    <div className="price">
                      <p>${product.price}</p>
                    </div>
                  </div>
                </div>
    )
}
