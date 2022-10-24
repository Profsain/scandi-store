import React, { Component } from 'react'
import { GraphQLClient } from 'graphql-request';
import {LOAD_DATA} from './graphQL/Queries';
import { Query } from "@apollo/client/react/components";
import './App.css';


class App extends Component {
  // Load data and store in redux on component mount
  componentDidMount() {
  
  }

  render() {
    return (
      <div>
        <h1>GraphQL Ecommerce Store</h1>
        <Query query={LOAD_DATA}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            console.log(data);
          }}
        </Query>
      </div>
    );
  }
}


export default App;