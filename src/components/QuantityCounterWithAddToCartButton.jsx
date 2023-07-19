import React, { useState } from 'react';
import styles from "../assets/css/App.module.scss";

export default function QuantityCounter() {
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else if (quantity === 0 && addedToCart) {
      setAddedToCart(false);
      setCartQuantity(0);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity >= 0) {
      setCartQuantity(quantity);
      setAddedToCart(true);
    }
  };

  return (
    <div className="row mt-4">
      <div className="col">
        <div className={`d-inline-block align-middle me-5 ${styles.buttonsQuantity}`}>
          <button 
            className="me-3" 
            onClick={decrementQuantity}>
            -
          </button> 
          <span>{quantity}</span>
          <button className="ms-3" 
            onClick={incrementQuantity}>
            +
          </button>
        </div>
        <div className="d-inline-block align-middle">
          <button 
            onClick={handleAddToCart} 
            disabled={quantity === 0 && !addedToCart}
            className={styles.buttonAddToCart}
            > 
            Add to cart
          </button>
        </div>
      </div>
      {addedToCart && <div>quantité ajoutée au panier : {cartQuantity}</div>}
    </div>
  );
}
