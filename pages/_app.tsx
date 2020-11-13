import React from 'react';
import AntHeader from '../components/Layout/AntHeader';
import AntFooter from '../components/Layout/AntFooter';
import withData from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from '../context/AuthContext';
import '../styles/antd.less';

class App extends React.Component<any> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <AuthProvider>
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
        </AuthProvider>
      </ApolloProvider>
    );
  }
}

export default withData(App);
