import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';
import { getTotalAmount } from '../helper';

class CartPage extends Component {

  render() {
    const cartItems = this.props.reduxStore.cartReducer.cartStore;
    
    return (
      <div>
        {cartItems.map((item, index) => (
          <div>
            <CartCard
              item={item}
              key={index}
            />
          </div>
        ))}

        <div>
          <p>Total ${getTotalAmount(cartItems)}</p>
          <div>
            <button><Link to='/bag'>View Bag</Link></button>
            <button>Checkout</button>
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
