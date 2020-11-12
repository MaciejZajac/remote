import React from 'react';
import AntHeader from '../components/AntHeader';
import AntFooter from '../components/AntFooter';
import withData from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

import Banner from '../components/Banner';
import '../styles/antd.less';

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <div
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
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
        <Banner />
        <AntFooter />
      </div>
    </ApolloProvider>
  );
}

export default withData(App);
