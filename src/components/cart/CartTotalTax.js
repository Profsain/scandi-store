import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartTotalTax extends Component {
  render() {
    console.log('TotalTax', this.props)
    return (
      <div>
        <h4>Tax: {this.props.tax}</h4>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state
});

export default connect(mapStateToProps)(CartTotalTax);