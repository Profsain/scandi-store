import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';
import './Cart.css';
import '../../App.css';

class CartPage extends Component {

  render() {
    const cartItems = this.props.reduxStore.cartReducer.cartStore;
    
    return (
      <div>
        {cartItems.map((item, index) => (
          <div key={index}>
            <CartCard
              item={item}
              key={index}
            />
          </div>
        ))}

        <div>
          {/* <p>Total ${getTotalAmount(cartItems)}</p> */}
          <div>
            <button className='View-bag'><Link to='/bag'>View Bag</Link></button>
            <button className='Add-to-cart'>Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxStore: state,
});

export default connect(mapStateToProps)(CartPage);
