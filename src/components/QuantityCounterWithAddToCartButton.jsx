import React, { useState } from 'react';

export default function QuantityCounter() {
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartQuantity(quantity);
      setAddedToCart(true);
    }
  };

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="d-inline-block me-5">
          <button className="me-3" onClick={decrementQuantity}>-</button> 
          <span>{quantity}</span>
          <button className="ms-3" onClick={incrementQuantity}>+</button>
        </div>
        <div className="d-inline-block">
          <button onClick={handleAddToCart} disabled={quantity === 0}>
            Add to cart
          </button>
        </div>
      </div>
      {addedToCart && <div>quantité ajoutée au panier : {cartQuantity}</div>}
    </div>
  );
}