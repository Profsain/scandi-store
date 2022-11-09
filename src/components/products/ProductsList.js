import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProducts, toggleShowProductDetails, setProductId } from '../../redux/ProductsSlice';
import { Query } from "@apollo/client/react/components";
import { LOAD_DATA } from '../../graphQL/Queries';
import ProductCard from './ProductCard';
import ProductDetails from '../productDetails/ProductDetails';
import CartPage from '../cart/CartPage';
import { currencyChangesHandler } from '../helper';
import './Products.css';

class ProductsList extends Component {
  render() {
    const { updateProductStore, productsStore, toggleShowProductDetails, setProductId } = this.props;
    const { products, showProductDetails, productId, openCartPage } = productsStore.productsReducer;
    const label = productsStore.cartReducer.currency;

    // open product details page
    const openProductDetails = (id) => {
      toggleShowProductDetails();
      setProductId(id);
    }

    return (
      <>
        <Query query={LOAD_DATA}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            // update redux products store after fetching data
            updateProductStore(data);

            return (
              <div className='Products-grid'>
                {
                  products && products.categories[0].products.map(({ id, name, gallery, prices, inStock }) => (
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
            )
          }}
        </Query>
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
  updateProductStore: (data) => dispatch(updateProducts(data)),
  toggleShowProductDetails: () => dispatch(toggleShowProductDetails()),
  setProductId: (id) => dispatch(setProductId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
