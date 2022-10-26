import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsList from './components/products/ProductsList';
import MenCategory from './components/men/MenCategory';
import WomenCategory from './components/women/WomenCategory';
import NavBar from './components/navigation/NavBar';
import ProductDetails from './components/productDetails/ProductDetails';
import CartModel from './components/cart/CartModel';
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
          <Route path='/men' element={<MenCategory />} />
          <Route path='/women' element={<WomenCategory />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<CartModel />} />
        </Routes>
      </div>
    );
  }
}


export default App;