import React, { Component } from 'react'
import { Query } from "@apollo/client/react/components";
import { LOAD_DATA } from '../../graphQL/Queries';
import ProductCard from './ProductCard';
import './Products.css';

export default class ProductsList extends Component {
  render() {
    return (
      <Query query={LOAD_DATA}>
        {({ loading, error, data }) => {
          console.log(data.categories[0].products)
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <div className='Products-grid'>
              {
                data.categories[0].products.map(({ id, name, gallery, prices}) => (
                  <div key={id}>
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
    )
  }
}
