import React from 'react';
import NavBar from './components/NavBar'
import ProductSection from './components/ProductSection'
import CustomCarousel from './components/CustomCarousel'
import ProductDescription from './components/ProductDescription'
import AddToCartModule from './components/AddToCartModule';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
        <ProductSection>
          <CustomCarousel />
          <ProductDescription />
          <AddToCartModule />
        </ProductSection>
      <Footer />
    </div>
  );
}

export default App