import React from 'react';
import App from 'next/app';
import AntHeader from '../components/AntHeader';
import AntFooter from '../components/AntFooter';

import '../styles/antd.less';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <AntHeader />
        <div style={{ maxWidth: '1366px', margin: '0 auto' }}>
          <Component {...pageProps} />
        </div>
        <AntFooter />
      </>
    );
  }
}

export default MyApp;
