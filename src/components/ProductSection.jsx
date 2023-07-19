import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../assets/css/App.module.scss';
import CustomCarousel from './CustomCarousel';
import ProductDescription from './ProductDescription';
import AddToCartModule from './AddToCartModule';
import products from '../../products.json'; 

export default function ProductSection() {
  // Manage the active product state
  const [activeProduct, setActiveProduct] = useState(products.products[0]);

  // Function to handle product toggle
  const handleProductToggle = (productId) => {
    const product = products.products.find((product) => product.id === productId);
    setActiveProduct(product);
  };

  return (
    <div className={`container d-flex justify-content-center align-items-center ${styles.productSection} ${styles.verticalCenter}`}>
      <div className="row">
        <div className="col-md-6">
          <div className={styles.carouselContainer}> 
            <CustomCarousel />
          </div>
        </div>
        <div className="col-md-6">
          <ProductDescription product={activeProduct} />
          {/* Pass the currentPrice as a prop to AddToCartModule */}
          <AddToCartModule currentPrice={activeProduct.currentPrice} />
        </div>
      </div>
      <div className='mt-5'>
        <button onClick={() => handleProductToggle(1)}>Product 1</button>
        <button onClick={() => handleProductToggle(2)}>Product 2</button>
        <button onClick={() => handleProductToggle(3)}>Product 3</button>
      </div>
    </div>
  );
}
