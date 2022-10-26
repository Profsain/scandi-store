import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <NavLink to='/'>Store</NavLink>
        <NavLink to='/men'>Men</NavLink>
        <NavLink to='/women'>Women</NavLink>
      </nav>
    )
  }
}
