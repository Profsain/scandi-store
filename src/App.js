import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GraphQLClient } from 'graphql-request';
import {LOAD_DATA} from './graphQL/Queries';
import { getProductsStart, getProductsSuccess, getProductsFailure } from './redux/features/ProductsSlice';
import './App.css';


class App extends Component {

  // Load data and store in redux on component mount
  componentDidMount() {
    
    const client = new GraphQLClient('http://localhost:4000/graphql', {
      headers: {
        authorization: 'Bearer my-token',
      },
    }) 
    client.request(LOAD_DATA).then(data => {
      console.log('data', data.categories[0].products);
      getProductsSuccess(data.categories.products);
    });
  }

  render() {
    const { products, loading, error } = this.props;
    console.log('products', products);
    return (
      <div>
        <h1>GraphQL Ecommerce Store</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    categories: state.products.categories,
    cart: state.products.cart,
    loading: state.products.loading,
    error: state.products.error,
  }
}

export default connect(mapStateToProps)(App);