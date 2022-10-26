import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGift, FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';


export default class NavBar extends Component {
  render() {
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
          <FaShoppingCart />
        </div>
      </div>
    )
  }
}
