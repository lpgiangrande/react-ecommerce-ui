import React from 'react';
import NavBar from './components/NavBar'
import ProductSection from './components/ProductSection'
import CustomCarousel from './components/CustomCarousel'
import ProductDescription from './components/ProductDescription'
import QuantityCounterWithAddToCartButton from './components/QuantityCounterWithAddToCartButton';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
        <ProductSection>
          <CustomCarousel />
          <ProductDescription />
          <QuantityCounterWithAddToCartButton />
        </ProductSection>
      <Footer />
    </div>
  );
}

export default App
