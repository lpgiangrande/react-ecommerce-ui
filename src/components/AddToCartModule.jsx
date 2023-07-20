import React, { useState } from 'react';
import styles from "../assets/css/App.module.scss";

export default function AddToCartModule({ retrieveTotalQuantity }) {
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0); // overall quantity that has been added to the cart 

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else if (quantity === 0 && addedToCart) {
      setAddedToCart(false);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
     // Add the selected quantity to the cart
     retrieveTotalQuantity((prevTotal) => prevTotal + quantity);
     // Reset the displayed quantity back to zero between "-" & "+"
     setQuantity(0);
     // Mark as added to cart
     setAddedToCart(true);
    } 
  };

  console.log("quantity", quantity)
 
  console.log("totalQuantity", totalQuantity)

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
            <svg
              className={styles.buttonAddToCartIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}