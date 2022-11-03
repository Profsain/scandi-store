import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartCard from '../cart/CartCard';

class ShoppingBag extends Component {
  render() {
    const cartItems = this.props.cart.cartStore;
    return (
      <div>
        {cartItems.map((item, index) => (
          <CartCard
            key={index}
            item={item}
          />
        ))}
        <h2>Add Button</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state,
});

export default connect(mapStateToProps)(ShoppingBag);