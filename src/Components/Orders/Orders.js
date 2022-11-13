import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products)
  return (
    <div className="shop_container">
      <div className="review_item_container">
         {
          cart.map(product => <ReviewItem
             product={product}
             key={product.id}></ReviewItem>)
         }
      </div>
      <div className="cart_container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Orders
