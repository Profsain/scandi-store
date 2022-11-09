import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleShowProductDetails, setProductId } from '../../redux/ProductsSlice';
import ProductCard from '../products/ProductCard';
import ProductDetails from '../productDetails/ProductDetails';
import { currencyChangesHandler } from '../helper';
import '.././products/Products.css';

class ClothCategory extends Component {
  render() {
    const { productsStore, toggleShowProductDetails, setProductId } = this.props;
    const { products, showProductDetails, productId } = productsStore.productsReducer;
    const label = productsStore.cartReducer.currency;
    
    // open product details page
    const openProductDetails = (id) => {
      toggleShowProductDetails();
      setProductId(id);
    }

    return (
      <>
        <div>
          Men Category
          <div className='Products-grid'>
            {
              products && products.categories[1].products.map(({ id, name, gallery, prices, inStock }) => (
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
        </div>
        {showProductDetails
          && <ProductDetails
            togglePage={toggleShowProductDetails}
            productId={productId}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(ClothCategory);