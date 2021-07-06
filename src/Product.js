import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                <p>info</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>599</strong>
                </p>
            </div>
            
        </div>
    );
}

export default Product
