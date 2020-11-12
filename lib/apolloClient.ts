import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import withApollo from 'next-with-apollo';
import fetch from 'isomorphic-unfetch';

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: 'http://localhost:4000',
});

// Export a HOC from next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {}),
    })
);
