import React from 'react';
import AntHeader from '../components/Layout/AntHeader';
import AntFooter from '../components/Layout/AntFooter';
import withApollo from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from '../context/AuthContext';
import '../styles/antd.less';
import { PostJobProvider } from '../context/PostOfferContext';

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <AuthProvider>
        <PostJobProvider>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <AntHeader />
            <div
              style={{
                maxWidth: '1366px',
                margin: '0 auto',
                width: '100%',
                flexGrow: 1,
              }}
            >
              <Component {...pageProps} />
            </div>
            <AntFooter />
          </div>
        </PostJobProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default withApollo(App);
