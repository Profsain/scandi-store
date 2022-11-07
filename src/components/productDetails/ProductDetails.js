import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart, addSelectedAttributes } from '../../redux/CartSlicer';
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from '../../graphQL/Queries';
import NavBar from '../navigation/NavBar';
import { currencyChangesHandler } from '../helper';
import './ProductDetails.css';
import '../../App.css';


class ProductDetails extends Component {
  
  render() {
    const { togglePage, productId, addToCart, productsStore } = this.props;

    const  limitText = (text, limit) => {
      if (text.length > limit) {
        return text.substring(0, limit) + '...';
      }
      return text;
    }
    
    const handleAddToCart = (item) => {
      addToCart(item);
      togglePage();
    }
    const currencyLabel = productsStore.cartReducer.currency;

    // handle attributes selection
    const selectAttribute = (e) => {
      const selectedAttributes = document.querySelectorAll('.Selected-attribute');
      selectedAttributes.forEach((attribute) => {
        attribute.classList.remove('Selected-attribute');
      });
      e.target.classList.add('Selected-attribute');
      const selectedAttribute = e.target.innerText;	
      addSelectedAttributes(selectedAttribute);
    }

    return (
      <Query query={LOAD_PRODUCT} variables={{ id: productId }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          // new cart product
          const item = {
            id: productId,
            name: data.product.name,
            images: data.product.gallery,
            price: data.product.prices,
            attribute: data.product.attributes,
          }

          return (
            <div className={`Container`}>
              <NavBar />
              <div className='Grid-container'>
                <div className='Gallery'>
                  {data.product.gallery.map((img, index) => (
                    <img key={index} src={img} alt={data.product.name} />
                  ))}
                </div>
                <div className='Img-view'>
                  <img src={data.product.gallery[0]} alt={data.product.name} />
                </div>

                <div className='Details'>
                  <button className='Close' onClick={togglePage}>Close</button>
                  <p className='Product-name'>{data.product.name}</p>

                  <div className='Attributes'>
                    {data.product.attributes.map((attr, index) => (
                   
                      <div key={index}>
                        <h4>{attr.name}:</h4>
                        <div>
                          {attr.items.map((item, index) => {
                            if (attr.name === 'Color') {
                              return (
                                <button id={item.value} onClick={selectAttribute} key={index} style={{ backgroundColor: `${item.value}`, height: '20px', width: '40px' }}></button>
                              )
                            } else {
                              return (
                                <button id={item.value} onClick={selectAttribute} key={index}>{item.value}</button>
                              )
                            }
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4>Price:</h4>
                  <p className='Product-price'>{currencyChangesHandler(data.product.prices, currencyLabel)}</p>
                  <button className='Add-to-cart' onClick={() => handleAddToCart(item)}>Add to cart</button>
                  <div dangerouslySetInnerHTML={{ __html: limitText(data.product.description, 200) }}></div>
                </div>
              </div>
            </div>
          )
        }
        }
      </Query>
    )
  }
}

const mapDispatchToProps = (disptach) => {
  return {
    addToCart: (item) => disptach(addItemToCart(item)),
    addSelectedAttributes: (item) => disptach(addSelectedAttributes(item)),
  }
}

const mapStateToProps = (state) => ({
  productsStore: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);