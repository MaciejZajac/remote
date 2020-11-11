import React from 'react';
import App from 'next/app';

import '../styles/antd.less';
import AntHeader from '../components/AntHeader';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <AntHeader />
        <div style={{ maxWidth: '1366px', margin: '0 auto' }}>
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}

export default MyApp;
