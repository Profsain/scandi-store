import React, { Component } from 'react';
import ProductsList from '../products/ProductsList';

export default class TechCategory extends Component {
  render() {
    return (
      <ProductsList catIndex={2}/>
    )
  }
}
