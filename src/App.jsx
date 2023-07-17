import { useState } from 'react'
import './assets/css/App.module.scss';
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
     <NavBar/>
     <ProductSection>
        <Carousel />
        <ProductDescription>
            <QuantityCounter/>
            <AddToCartButton />
        </ProductDescription>
     </ProductSection> 
     <Footer/>
    </div>
  )
}

export default App
