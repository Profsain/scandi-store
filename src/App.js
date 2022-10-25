import React, { Component } from 'react'
// import ProductsList from './components/products/ProductsList';
import ProductDetails from './components/productDetails/ProductDetails';
import './App.css';


class App extends Component {
  componentDidMount() {
  
  }

  render() {
    return (
      <div className='App'>
        <h1>GraphQL Ecommerce Store</h1>
        {/* <ProductsList /> */}
        <ProductDetails />
      </div>
    );
  }
}


export default App;