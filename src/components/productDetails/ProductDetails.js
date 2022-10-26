import React, { Component } from 'react';
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from '../../graphQL/Queries';
import './ProductDetails.css';

export default class ProductDetails extends Component {
  togglePage = this.props.toggle;
  productId = this.props.productId;
  limitText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }

  render() {
    return (
      <Query query={LOAD_PRODUCT} variables={{ id: this.productId }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
         
          return (
            <div className={`Container`}>
              <div className='Grid-container'>
                <div className='Gallery'>
                  {data.product.gallery.map((img, index) => (
                    <img width='100px' height='100px' key={index} src={img} alt={data.product.name} />
                  ) )}
                </div>
                <div className='Img-view'>
                  <img width='400px' height='400px' src={data.product.gallery[0]} alt={data.product.name} />
                </div>

                <div className='Details'>
                  <button onClick={this.togglePage}>Close</button>
                  <h3>{data.product.name}</h3>

                  <div className='Attributes'>
                    {data.product.attributes.map((attr, index) => (
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

                  <h4>Price:</h4>
                  <p>{data.product.prices[0].currency.symbol}{data.product.prices[0].amount}</p>

                  <button>Add to cart</button>
                  <div dangerouslySetInnerHTML={{ __html: this.limitText(data.product.description, 200) }}></div>
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
