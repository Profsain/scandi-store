import React, { Component } from 'react';
import { BsCart } from "react-icons/bs";

import './Products.css';

export default class ProductCard extends Component {

  render() {
    const { img, name, productCost, inStock } = this.props;

    return (
      <div className='Product-card'>
        <img src={img} alt={name} className='Product-img' />
        {inStock ? <p className='Product-stock'>In Stock</p> : <p className='Product-stock'>Out of Stock</p>}
        <div>
          <p>{name}</p>
          
          <div className='Price-cart'>
            <p className='Product-price'>{productCost}</p>

            <button className='Product-cart'>
              <BsCart />
            </button>

          </div>
        </div>
      </div>
    )
  }
}
