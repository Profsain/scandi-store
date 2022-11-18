import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleShowProductDetails, setProductId } from '../../redux/ProductsSlice';
import ProductCard from './ProductCard';
import ProductDetails from '../productDetails/ProductDetails';
import CartPage from '../cart/CartPage';
import { currencyChangesHandler } from '../helper';
import './Products.css';

class ProductsList extends Component {
  
  render() {
    const { catIndex, productsStore, toggleShowProductDetails, setProductId } = this.props;
    const { products, showProductDetails, productId, openCartPage } = productsStore.productsReducer;
    const label = productsStore.cartReducer.currency;
    // open product details page
    const openProductDetails = (id) => {
      toggleShowProductDetails();
      setProductId(id);
    }

    return (
      <>
              <div className='Products-grid'>
                {
                  products && products.categories[catIndex].products.map(({ id, name, gallery, prices, inStock }) => (
                    <div key={id} onClick={() => openProductDetails(id)}>
                      <ProductCard
                        key={id}
                        name={name}
                        img={gallery[0]}
                        inStock={inStock}
                        productCost={currencyChangesHandler(prices, label)}
                      />
                    </div>
                  ))
                }
              </div>
        {showProductDetails
          && <ProductDetails
            togglePage={toggleShowProductDetails}
            productId={productId}
          />
        }
        {
          openCartPage && <CartPage />
        }
          
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  productsStore: state,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowProductDetails: () => dispatch(toggleShowProductDetails()),
  setProductId: (id) => dispatch(setProductId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
