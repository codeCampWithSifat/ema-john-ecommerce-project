import React from 'react';
import "./ReviewItem.css";
import { RiDeleteBinFill } from 'react-icons/ri';


const ReviewItem = ({product}) => {
    console.log(product)
    const {name, price, shipping, quantity, img} = product;
  return (
    <div className='single_reiview_container'>
      <div className="review_img">
        <img src={img} alt="" />
      </div>
      <div className="review_item_details_container">
        <div className="review_item_details" title={name}>
            <p className='product_name'>{name.length > 20 ? name.slice(0,20) + "..." : name}</p>
            <p className='product_price'><small>Price :  $ {price}</small></p>
            <p><small>Shipping Charge :$ {shipping} </small></p>
            <p><small>Quantity : ${quantity}</small></p>
        </div>
        <div className="deleted_button">
            <button><RiDeleteBinFill /></button>
        </div>
      </div>
    </div>
  )
}

export default ReviewItem
