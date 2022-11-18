import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleOpenCartPage } from '../../redux/ProductsSlice';
import CartCard from './CartCard';
import './Cart.css';
import '../../App.css';

class CartPage extends Component {

  render() {
    const cartItems = this.props.reduxStore.cartReducer.cartStore;
    const { toggleCartPage } = this.props;

    const cartModelCloseHandler = () => {
       toggleCartPage();
    }

    const preventEventPropagation = (e) => {
      e.stopPropagation();
    }
    return (
      <div className='Cart-model' onClick={cartModelCloseHandler}>
        <div 
          className='CartPage-container' 
          onClick={(e) => preventEventPropagation(e)}
        >
          {cartItems.map((item, index) => (
            <div key={index}>
              <CartCard
                item={item}
                key={index}
              />
            </div>
          ))}

          <div>
            <div className='Action-btn'>
              <button className='View-bag'><Link to='/bag'>View Bag</Link></button>
              <button className='Add-to-cart'>Checkout</button>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxStore: state,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartPage: () => dispatch(toggleOpenCartPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
