import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProducts } from '../../redux/ProductsSlice';
import { Query } from "@apollo/client/react/components";
import { LOAD_DATA } from '../../graphQL/Queries';
import ProductsList from '../products/ProductsList';

class Home extends Component {
  render() {
    const { updateProductStore } = this.props;
    return (
      <>
        <Query query={LOAD_DATA}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            // update redux products store after fetching data
            updateProductStore(data);

            return (
              <ProductsList catIndex={0}/>
            )
          }
          }
        </Query>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  productsStore: state,
});

const mapDispatchToProps = (dispatch) => ({
  updateProductStore: (data) => dispatch(updateProducts(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)