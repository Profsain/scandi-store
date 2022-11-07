import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItemFromCart } from '../../redux/CartSlicer';
import { currencyChangesHandler } from '../helper';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './Cart.css';
import '../../App.css';

class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    }
  }

  render() {
    const { id, name, price, attribute, quantity, images } = this.props.item;
    const { incrementQuantity, decrementQuantity, removeItem,  cart } = this.props;
    const { selectedAttributes } = cart.cartReducer.selectedAttributes;
    
    console.log('cart', cart.cartReducer.selectedAttributes);
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

    const currencyLabel = cart.cartReducer.currency;

    return (
      <div className='Cart-container Cart-row'>
        <div className='Details'>
          <p className='Product-name'>{name}</p>
         
          <p className='Product-price'>{currencyChangesHandler(price, currencyLabel)}</p>
          <div className='Attributes'>
            {attribute.map((attr, index) => (
              <div key={index}>
                <h4>{attr.name}:</h4>
                <div>
                  {attr.items.map((item, index) => {
                    if (attr.name === 'Color') {
                      return (
                        <button key={index} style={{ backgroundColor: `${item.value}`, height: '20px', width: '40px'}}></button>
                      )
                    } else {
                      return (
                        <button key={index}>{item.value}</button>
                      )
                    }
                  }
                    
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
              className='Close'
              onClick={() => removeItem(id)}
            >
              Remove
          </button>
        </div>

        <div className='Cart-img Cart-row'>
          <div className='Cart-qty'>
            <button onClick={() => incrementQuantity(id)}>+</button>
            <p>{quantity}</p>
            <button onClick={() => decrementQuantity(id)}>-</button>
          </div>

          <div className='Img-control'>
            <img src={images[this.state.imgIndex]} alt="gallery" />
            <div className='Prev-next'>
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
  removeItem: (item) => dispatch(removeItemFromCart(item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
