import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const {cart} = props;
  // console.log(cart);

  let total = 0 ;
  let shipping = 0;
  let quantity = 0 ;
  for(let product of cart) {
    total = total + product.price* product.quantity ;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity  ;
  }
  
  const tax = (total * .10).toFixed(2);

  const grandTotal = Number(total + shipping + Number(tax))
  return (
    <div className="cart">
      <h4>Ordered Summary</h4>
      <p>Selected Items {quantity}</p>
      <p>Total Price : $ {total} </p>
      <p>Total Shipping : $ {shipping}</p>
      <p>Tax : $ {tax}</p>
      <h4>Grand Total : $ {grandTotal}</h4>
      {props.children}
    </div>
  );
};

export default Cart;
