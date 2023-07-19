import React, {useState} from 'react';
import NavBar from './components/NavBar'
import ProductSection from './components/ProductSection'
import CustomCarousel from './components/CustomCarousel'
import ProductDescription from './components/ProductDescription'
import AddToCartModule from './components/AddToCartModule';
import Footer from './components/Footer'

function App() {

  const [totalQuantity, setTotalQuantity] = useState(0);

  // Callback function to update totalQuantity in App component
  const handleTotalQuantityChange = (newTotalQuantity) => {
    setTotalQuantity(newTotalQuantity);
  };

  return (
    <div className="App">
      <NavBar totalQuantity={totalQuantity}/>
        <ProductSection retrieveTotalQuantity={handleTotalQuantityChange}>
          <CustomCarousel />
          <ProductDescription />
          <AddToCartModule />
        </ProductSection>
      <Footer />
    </div>
  );
}

export default App