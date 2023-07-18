import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../assets/css/App.module.scss";
import CustomCarousel from './CustomCarousel';
import ProductDescription from './ProductDescription';
import QuantityCounterWithAddToCartButton from './QuantityCounterWithAddToCartButton';

export default function ProductSection() {
  return (
    <div className={`container d-flex justify-content-center align-items-center ${styles.productSection} ${styles.verticalCenter}`}>
      <div className="row">
        <div className="col-md-6 px-0">
          <div className={styles.carouselContainer}> 
            <CustomCarousel />
          </div>
        </div>
        <div className="col-md-6 px-0">
          <ProductDescription />
          <QuantityCounterWithAddToCartButton />
        </div>
      </div>
    </div>
  );
}
