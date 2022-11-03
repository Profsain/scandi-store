import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../../redux/CartSlicer';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './Cart.css';

class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    }
  }

  render() {
    const { id, name, price, attribute, quantity, images } = this.props.item;
    const { incrementQuantity, decrementQuantity } = this.props;

    // change item images
    const handleNextImg = () => {
      if (this.state.imgIndex < images.length - 1) {
        this.setState({ imgIndex: this.state.imgIndex + 1 });
      }
    }

    const handlePrevImg = () => {
      if (this.state.imgIndex > 0) {
        this.setState({ imgIndex: this.state.imgIndex - 1 });
      }
    }

    return (
      <div className='Cart-container Cart-row'>
        <div className='Details'>
          <p>{name}</p>
          <h4>{price[0].currency.symbol}{price[0].amount}</h4>
          <div>
            {attribute.map((attr, index) => (
              <div key={index}>
              <h4>{attr.name}:</h4>
              <div>
                {attr.items.map((item, index) => (
                  <button key={index} style={{backgroundColor: `${item.value}`}}>{item.value}</button>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className='Cart-img Cart-row'>
          <div className='Cart-qty'>
            <button onClick={() => incrementQuantity(id)}>+</button>
            <p>{quantity}</p>
            <button onClick={() => decrementQuantity(id)}>-</button>
          </div>
          <div className='Img-control'>
            <img height="200px" src={images[this.state.imgIndex]} alt="gallery" />
            <div className='Cart-row'>
              <button onClick={handlePrevImg}><FaAngleLeft /></button>
              <button onClick={handleNextImg}><FaAngleRight /></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state
});

const mapDispatchToProps = (dispatch) => ({
  incrementQuantity: (item) => dispatch(incrementQuantity(item)),
  decrementQuantity: (item) => dispatch(decrementQuantity(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
