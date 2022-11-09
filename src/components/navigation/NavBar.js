import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCurrency } from '../../redux/CartSlicer';
import { toggleOpenCartPage } from '../../redux/ProductsSlice';
import { FaGift, FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';


class NavBar extends Component {
  render() {
    const { reduxStore, changeCurrencyValue, toggleCartPage } = this.props;
    const cartTotalQuantity = reduxStore.cartReducer.cartStore.length;
    
    // Handle currency change
    const handleCurrencyChange = (e) => {
      changeCurrencyValue(e.target.value);
    }

    return (
      <div className='Navbar'>
        <nav>
        <NavLink to='/'>Store</NavLink>
        <NavLink to='/cloth'>Cloth</NavLink>
        <NavLink to='/tech'>Tech</NavLink>
        </nav>
        <div className='Brand'>
          <FaGift />
        </div>

        <div className='Cart'>
          <div>
            <select name='currency' id='currency' className='Symbol' onChange={handleCurrencyChange}>
              <option value='USD' >$</option>
              <option value='GBP'>£</option>
              <option value='AUD'>A</option>
              <option value='JPY'>¥</option>
              <option value='RUB'>₽</option>
            </select>
          </div>
          <button className='Cart-btn' onClick={toggleCartPage}><FaShoppingCart />{cartTotalQuantity}</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  reduxStore: state,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrencyValue: (currency) => dispatch(changeCurrency(currency)),
  toggleCartPage: () => dispatch(toggleOpenCartPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);