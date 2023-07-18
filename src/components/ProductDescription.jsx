import React from 'react'
import products from '../../products.json';
import styles from "../assets/css/App.module.scss";

export default function ProductDescription() {
  const { productName, brand, description, price } = products.products[0];

  return (
    <div>
      <h6 className={styles.brandName}>{brand}</h6>
      <h1 className={styles.productTitle}>{productName}</h1>
      <p className={styles.productDescription}>{description}</p>
      <div>
        <span className={styles.currentPrice}>$ {price}</span> - <span className={styles.brandName}> $discount tag</span>
      </div>
      <span className={styles.oldPrice}>old price $</span>
    </div>
  );
}