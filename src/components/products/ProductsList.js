import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/ProductsSlice';
import { Query } from "@apollo/client/react/components";
import { LOAD_DATA } from '../../graphQL/Queries';
import ProductCard from './ProductCard';
import ProductDetails from '../productDetails/ProductDetails';
import './Products.css';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProductDetails: false,
      productId: null,
    }
  }

  // toggle to open productDetails page
  toggleShowProductDetails = () => {
    this.setState({
      showProductDetails: !this.state.showProductDetails
    })
  }

  openProductDetails = (id) => {
    this.toggleShowProductDetails()
    this.setState({
      productId: id
    });
  }

  // Handle currency changes
  currencyChangesHandler = (pricesData, label) => {
    let amount = 0;
    let symbol = '';
    
    pricesData.map((price) => {
      if (price.currency.label === label) {
        amount = price.amount;
        symbol = price.currency.symbol;
      }
      return null;
    });
    return symbol + amount
  } 

  render() {
    const { updateProductStore, productsStore } = this.props;
    const productsData = productsStore.productsReducer.products;
    const label = productsStore.cartReducer.currency;

    return (
      <>
        <Query query={LOAD_DATA}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            // update redux product store after fetching data
            updateProductStore(data);
          
            return (
              <div className='Products-grid'>
                {
                  productsData && productsData.categories[0].products.map(({ id, name, gallery, prices }) => (
                    <div key={id} onClick={() => this.openProductDetails(id)}>
                      <ProductCard
                        key={id}
                        name={name}
                        img={gallery[0]}
                        productCost={this.currencyChangesHandler(prices, label)}
                      />
                    </div>
                  ))
                }
              </div>
            )
          }}
        </Query>
        {this.state.showProductDetails
          && <ProductDetails
            togglePage={this.toggleShowProductDetails}
            productId={this.state.productId}
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
  updateProductStore: (data) => dispatch(updateProducts(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);