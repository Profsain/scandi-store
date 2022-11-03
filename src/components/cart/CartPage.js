import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

class CartPage extends Component {

  render() {
    const cartItems = this.props.cart.cartStore;

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
          <p>Total $2000.00</p>
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
  cart: state
});

export default connect(mapStateToProps) (CartPage);
