import React, { Component } from 'react'
import ProductsList from './components/products/ProductsList';
import './App.css';


class App extends Component {
  componentDidMount() {
  
  }

  render() {
    return (
      <div className='App'>
        <h1>GraphQL Ecommerce Store</h1>
        <ProductsList />
      </div>
    );
  }
}


export default App;