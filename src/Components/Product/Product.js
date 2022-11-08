import React from 'react';
import "./Product.css"
import { HiShoppingCart } from 'react-icons/hi';

const Product = (props) => {
    // console.log(props.product);
    const {img, name, price, seller, ratings,} = props.product;
   
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product_info">
            <p className='product_name'>{name}</p>
            <p className='product_price'>Price : ${price}</p>
            <p className='product_manufacture'>Manufacture : {seller}</p>
            <p className="product_rating">Rating : {ratings}</p>
      </div>
       <button className='main_button'
       onClick={() => props.handleAddToCart(props.product)}
       >Add To Cart <HiShoppingCart/></button>
    </div>
  )
}

export default Product
