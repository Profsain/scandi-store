import React, { Component } from 'react';
import './Products.css';

export default class ProductCard extends Component {

  render() {
    const { img, name, productCost } = this.props;
    
    return (
      <div className='Product-card'>
        <img src={img} alt='Productimage' className='Product-img'/>
        <div>
          <p>{name}</p>
          <p>{productCost}</p>
        </div>
      </div>
    )
  }
}
