import React, { Component } from 'react'
import './Products.css';

export default class ProductCard extends Component {
  render() {
    return (
      <div className='Product-card'>
        <img src={this.props.img} alt='Productimage' className='Product-img'/>
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.symbol }{this.props.amount}</p>
        </div>
      </div>
    )
  }
}
