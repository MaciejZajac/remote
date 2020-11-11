import React from 'react';
import App from 'next/app';
import AntHeader from '../components/AntHeader';
import AntFooter from '../components/AntFooter';

import Banner from '../components/Banner';
import '../styles/antd.less';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
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
    );
  }
}
