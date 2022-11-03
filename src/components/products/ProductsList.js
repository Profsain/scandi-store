import React, { Component } from 'react';
import { Query } from "@apollo/client/react/components";
import { LOAD_DATA } from '../../graphQL/Queries';
import ProductCard from './ProductCard';
import ProductDetails from '../productDetails/ProductDetails';
import './Products.css';

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProductDetails: false,
      productId: null,
    }
  }

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
  render() {
    return (
      <>
        <Query query={LOAD_DATA}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            
            return (
              <div className='Products-grid'>
                {
                  data && data.categories[0].products.map(({ id, name, gallery, prices }) => (
                    <div key={id} onClick={() => this.openProductDetails(id)}>
                      <ProductCard
                        key={id}
                        name={name}
                        img={gallery[0]}
                        amount={prices[0].amount}
                        symbol={prices[0].currency.symbol}
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
