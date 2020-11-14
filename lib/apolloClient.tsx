import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import withApollo, { ApolloContext } from 'next-with-apollo';
import fetch from 'isomorphic-unfetch';
import { setContext } from 'apollo-link-context';
import cookieCutter from 'cookie-cutter';
import NextApp, { AppInitialProps } from 'next/app';
const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: 'http://localhost:4000',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('jwtToken');
  const token = cookieCutter.get('token');
  console.log('token', token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Export a HOC from next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link: authLink.concat(httpLink as any) as any,
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {}),
    })
);
