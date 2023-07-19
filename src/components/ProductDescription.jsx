import React from 'react';
import styles from "../assets/css/App.module.scss";

export default function ProductDescription({ product }) {
  const { productName, brand, description, currentPrice, discount, oldPrice } = product || {};

  return (
    <div>
      {product ? (
        <>
          <h6 className={styles.brandName}>{brand}</h6>
          <h1 className={styles.productTitle}>{productName}</h1>
          <p className={styles.productDescription}>{description}</p>
          <div className='pb-1 d-flex align-items-center'>
            <span className={styles.currentPrice}>${currentPrice}</span>
            <span className={styles.discountTag}>{discount} %</span>
          </div>
          <span className={styles.oldPrice}>{oldPrice ? '$' + oldPrice : ''}</span>
        </>
      ) : (
        <p>No product available.</p>
      )}
    </div>
  );
}
