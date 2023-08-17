import React from 'react'
import { CartProvider } from 'react-use-cart';
import Home from '../Allproducts/Home';
const Products = () => {
  return (
    <div>
       <CartProvider>
        <Home/>       
      </CartProvider>
    </div>
  )
}

export default Products
