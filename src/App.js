import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsList from './components/products/ProductsList';
import ClothCategory from './components/cloth/ClothCategory';
import TechCategory from './components/tech/TechCategory';
import NavBar from './components/navigation/NavBar';
import ProductDetails from './components/productDetails/ProductDetails';
import CartPage from './components/cart/CartPage';
import ShoppingBag from './components/bag/ShoppingBag';
import './App.css';


class App extends Component {
  componentDidMount() {
  
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ProductsList />} />
          <Route path='/cloth' element={<ClothCategory />} />
          <Route path='/tech' element={<TechCategory />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/bag' element={<ShoppingBag />} />
        </Routes>
      </div>
    );
  }
}


export default App;