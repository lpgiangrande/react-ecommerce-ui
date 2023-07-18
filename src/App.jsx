import React from 'react';
import NavBar from './components/NavBar'
import ProductSection from './components/ProductSection'
import Carousel from './components/Carousel'
import ProductDescription from './components/ProductDescription'
import QuantityCounterWithAddToCartButton from './components/QuantityCounterWithAddToCartButton';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
        <ProductSection>
          <Carousel />
          <ProductDescription />
          <QuantityCounterWithAddToCartButton />
        </ProductSection>
      <Footer />
    </div>
  );
}

export default App
