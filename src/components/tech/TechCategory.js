import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../products/ProductCard';
import { currencyChangesHandler } from '../helper';
import '.././products/Products.css';

class TechCategory extends Component {
  render() {
    const { productsStore } = this.props;
    const productsData = productsStore.productsReducer.products;
    const label = productsStore.cartReducer.currency;
    return (
      <div>
        <h2>Tech Store</h2>
        <div className='Products-grid'>
          {
            productsData && productsData.categories[2].products.map(({ id, name, gallery, prices, inStock }) => (
              <div key={id} onClick={() => this.openProductDetails(id)}>
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
    )
  }
}


const mapStateToProps = (state) => ({
  productsStore: state,
});

export default connect(mapStateToProps)(TechCategory);