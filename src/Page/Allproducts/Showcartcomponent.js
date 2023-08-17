import React from 'react'
import { CartProvider } from 'react-use-cart';
import Cart from '../Allproducts/Cart';
const Showcartcomponent = () => {
  return (
    <div>
    
       <CartProvider>      
        <Cart />
      </CartProvider>
      
    </div>
  )
}

export default Showcartcomponent
