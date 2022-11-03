import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartCard from '../cart/CartCard';
import { getTotalAmount, getTax, getItemQuantity } from '../helper';

class ShoppingBag extends Component {
  render() {
    const cartItems = this.props.cart.cartStore;
    return (
      <div>
        <h2>CART</h2>
        <hr />
        {cartItems.map((item, index) => (
          <CartCard
            key={index}
            item={item}
          />
        ))}
        <div>
          <p>Tax21%: <span>${getTax(21, cartItems)}</span></p>
          <p>Quantity: <span>{getItemQuantity(cartItems)}</span></p>
          <p>Total: <span>${getTotalAmount(cartItems)}</span></p>
          <button>Order</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state,
});

export default connect(mapStateToProps)(ShoppingBag);