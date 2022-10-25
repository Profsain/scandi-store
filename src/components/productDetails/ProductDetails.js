import React, { Component } from 'react';
import './ProductDetails.css';

export default class ProductDetails extends Component {
  render() {
    return (
      <div className='Container'>
        <div className='Gallery'>
          <img width='100px' height='100px' src='tshirt.jpg' alt='' />
          <img width='100px' height='100px' src='tshirt.jpg' alt='' />
          <img width='100px' height='100px' src='tshirt.jpg' alt='' />
        </div>
        <div className='Img-view'>
          <img width='400px' height='400px' src='tshirt.jpg' alt='' />
        </div>
        <div className='Details'>
          <h3>Product Name</h3>
          <h4>Size</h4>
          <div className='Size'>
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
          <h4>Color</h4>
          <div className='Color'>
            <button>Red</button>
            <button>Blue</button>
            <button>Green</button>
          </div>
          <h4>Price</h4>
          <p>$60.99</p>

          <button>Add to cart</button>
          <p>Beautiful men tshirt for winter outfit. Enjoy yourself</p>
        </div>
      </div>
    )
  }
}
