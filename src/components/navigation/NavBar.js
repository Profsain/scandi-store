import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaGift, FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';


class NavBar extends Component {
  render() {
    const cartTotalQuantity = this.props.cart.cartStore.length;
    
    return (
      <div className='Navbar'>
        <nav>
        <NavLink to='/'>Store</NavLink>
        <NavLink to='/men'>Men</NavLink>
        <NavLink to='/women'>Women</NavLink>
        </nav>
        <div className='Brand'>
          <FaGift />
        </div>

        <div className='Cart'>
          <div>
            <select name='currency' id='currency' className='Symbol'>
              <option value='USD'>$</option>
              <option value='EUR'>£</option>
              <option value='AUD'>A$</option>
              <option value='JPY'>¥</option>
              <option value='RYB'>₽</option>
            </select>
          </div>
          <NavLink to='/cart'><FaShoppingCart />{cartTotalQuantity}</NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state,
});

export default connect(mapStateToProps)(NavBar);