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

  // Error Handling
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }
  });

  // Server localhost link system
  const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  ]);

  // client system
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
