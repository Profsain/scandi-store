import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/CartSlicer';
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from '../../graphQL/Queries';
import NavBar from '../navigation/NavBar';
import './ProductDetails.css';



class ProductDetails extends Component {

  limitText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }

  render() {
    const { togglePage, productId, addToCart } = this.props;
    const handleAddToCart = (item) => {
      addToCart(item);
      togglePage();
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
                    <img width='100px' height='100px' key={index} src={img} alt={data.product.name} />
                  ) )}
                </div>
                <div className='Img-view'>
                  <img width='400px' height='400px' src={data.product.gallery[0]} alt={data.product.name} />
                </div>

                <div className='Details'>
                  <button onClick={togglePage}>Close</button>
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

                  <button onClick={() => handleAddToCart(item)}>Add to cart</button>
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

const mapDispatchToProps = (disptach) => {
  return {
    addToCart: (item) => disptach(addItemToCart(item))
  }
}
export default connect(null, mapDispatchToProps)(ProductDetails);