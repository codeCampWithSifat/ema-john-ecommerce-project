import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemovedProduct = product =>{
    const rest = cart.filter(pd => pd._id !== product._id);
    setCart(rest)
    removeFromDb(product._id)
  }
  return (
    <div className="shop_container">
      <div className="review_item_container">
         {
          cart.map(product => <ReviewItem
             product={product}
             handleRemovedProduct={handleRemovedProduct}
             key={product._id}></ReviewItem>)
         }
      </div>
      <div className="cart_container">
          <Cart cart={cart}>
            <Link to="/shipping">
              <button>Proceed To Checkout</button>
            </Link>
          </Cart>
      </div>
    </div>
  )
}

export default Orders
