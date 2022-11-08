import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("./products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);

  const handleAddToCart = (product) => {
    // console.log(product)
    const newCart = [...cart, product];
    setCart(newCart);
  }
  return (
   <div className="shop_container">
      <div className="products_container">
        {
            products.map(product => <Product 
                key={product.id}
                handleAddToCart={handleAddToCart}
                product={product}></Product>)
        }
      </div>
      <div className="cart_container">
          <Cart cart={cart}></Cart>
      </div>
   </div>
  )
}

export default Shop
