import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../assets/css/App.module.scss";
import Carousel from './Carousel';
import ProductDescription from './ProductDescription';
import QuantityCounterWithAddToCartButton from './QuantityCounterWithAddToCartButton';

export default function ProductSection() {
  return (
    <div className={`container d-flex justify-content-center align-items-center product-section ${styles.content}`}>
      <div className="row">
      <div className="col-lg-6 ">
          <Carousel />
        </div>
        <div className="col-lg-6 ">
          <ProductDescription />
          <QuantityCounterWithAddToCartButton />
        </div>
      </div>
    </div>
  );
}



