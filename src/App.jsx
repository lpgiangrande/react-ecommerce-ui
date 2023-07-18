import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./assets/css/App.module.scss";
import NavBar from './components/NavBar'
import ProductSection from './components/ProductSection'
import Carousel from './components/Carousel'
import ProductDescription from './components/ProductDescription'
import QuantityCounter from './components/QuantityCounter'
import AddToCartButton from './components/AddToCartButton'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className={styles.content}>
        <ProductSection>
          <Carousel />
          <ProductDescription>
            <QuantityCounter />
            <AddToCartButton />
          </ProductDescription>
        </ProductSection>
      </div>
      <Footer />
    </div>
  )
}

export default App
