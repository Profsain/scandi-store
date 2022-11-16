import React, { Component } from 'react';
import ProductsList from '../products/ProductsList';

export default class ClothCategory extends Component {
  render() {
    return (
      <ProductsList catIndex={1}/>
    )
  }
}
