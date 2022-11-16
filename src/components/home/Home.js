import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from "@apollo/client/react/components";
import { LOAD_DATA } from '../../graphQL/Queries';

class Home extends Component {
  render() {
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
              </div>
            )
          }
          }
        </Query>
      </>
    )
  }
}

const mapDispatchToProps = (state) => ({
  updateProductStore: (data) => dispatch(updateProducts(data)),
})

export default connect(mapDispatchToProps)(Home)