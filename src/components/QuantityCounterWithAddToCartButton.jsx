import React from 'react'
import { useState } from 'react'

export default function QuantityCounter() {

  const [ quantity, setQuantity ] = useState(0)

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="row mt-4">
    <div className="col">
      <div className="d-inline-block me-5">
        <button 
          className='me-3'
          onClick={decrementQuantity}>-</button> 
          <span> {quantity}  </span>
        <button 
          className='ms-3'
          onClick={incrementQuantity}>+</button>
      </div>
      <div className="d-inline-block">
        <button onClick={incrementQuantity}>Add to cart</button>
      </div>
    </div>
  </div>
  );
}
