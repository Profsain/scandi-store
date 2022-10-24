import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from} from '@apollo/client'
  import { onError } from '@apollo/client/link/error';
  import { store } from './redux/App';
  import { Provider } from 'react-redux';
  import { request, GraphQLClient } from 'graphql-request';
  import { LOAD_DATA } from './graphQL/Queries';


  // Error Handling
  // const errorLink = onError(({ graphQLErrors, networkError }) => {
  //   if (graphQLErrors) {
  //     graphQLErrors.map(({ message, locations, path }) =>
  //       console.log(
  //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
  //       ),
  //     );
  //   }
  // });

  // // Server localhost link system
  // const link = from([
  //   errorLink,
  //   new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  // ]);

  // // client system
  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   link
  // })
  
  // data request
  const client = new GraphQLClient('http://localhost:4000/graphql', {
    headers: {
      authorization: 'Bearer my-token',
    },
  })

  client.request(LOAD_DATA).then(data => console.log(data));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
