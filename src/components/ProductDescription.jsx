import React, { useState, useEffect } from 'react';
import styles from "../assets/css/App.module.scss";

export default function ProductDescription({ product }) {
  const { productName, brand, description, currentPrice, discount, oldPrice } = product || {};

  // Use useState to manage the current price state
  const [calculatedCurrentPrice, setCalculatedCurrentPrice] = useState(null);

  // Calculate the current price based on the discount and old price (if applicable)
  const calculateCurrentPrice = () => {
    if (discount !== null) {
      return oldPrice ? oldPrice - (oldPrice * discount / 100) : null;
    }
    return currentPrice;
  };

  console.log(currentPrice)

  // Update the current price state when the component mounts or when the discount or old price changes
  useEffect(() => {
    const newCurrentPrice = calculateCurrentPrice();
    setCalculatedCurrentPrice(newCurrentPrice);
  }, [discount, oldPrice]);

  
  return (
    <div>
      {product ? (
        <>
          <h6 className={styles.brandName}>{brand}</h6>
          <h1 className={styles.productTitle}>{productName}</h1>
          <p className={styles.productDescription}>{description}</p>
          <div className='pb-1 d-flex align-items-center'>
            {calculatedCurrentPrice ? (
              <>
                <span className={styles.currentPrice}>${calculatedCurrentPrice}</span>
                {discount && discount > 0 && <span className={styles.discountTag}>{discount}%</span>}
              </>
            ) : (
              <span className={styles.noDiscount}>No price available.</span>
            )}
          </div>
          {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
        </>
      ) : (
        <p>No product available.</p>
      )}
    </div>
  );
}
