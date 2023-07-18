import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../assets/css/App.module.scss";
import Carousel from './Carousel';
import ProductDescription from './ProductDescription';
import QuantityCounter from './QuantityCounter';
import AddToCartButton from './AddToCartButton';

export default function ProductSection() {
  return (
    <div className={`container product-section ${styles.content}`}>
      <div className="row">
        <div className="col-lg-6">
          <Carousel />
        </div>
        <div className="col-lg-6">
          <ProductDescription />
          <QuantityCounter />
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}



