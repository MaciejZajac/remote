import { Button, Col, Menu, Row, Space } from 'antd';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useApolloClient, useQuery } from '@apollo/client';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const AntHeader = () => {
  const { logout, user } = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>Remote Under Palm</title>
        <style>
          {`
            #nprogress {
              pointer-events: none;
            }
            #nprogress .bar {
              background: #29D;
              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;
              width: 100%;
              height: 6px;
            }
            #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: 0 0 10px #29D, 0 0 5px #29D;
              opacity: 1;
              -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
            }
            #nprogress .spinner {
              display: "block";
              position: fixed;
              z-index: 1031;
              top: 15px;
              right: 15px;
            }
            #nprogress .spinner-icon {
              width: 18px;
              height: 18px;
              box-sizing: border-box;
              border: solid 2px transparent;
              border-top-color: #29D;
              border-left-color: #29D;
              border-radius: 50%;
              -webkit-animation: nprogresss-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
            }
            .nprogress-custom-parent {
              overflow: hidden;
              position: relative;
            }
            .nprogress-custom-parent #nprogress .spinner,
            .nprogress-custom-parent #nprogress .bar {
              position: absolute;
            }
            @-webkit-keyframes nprogress-spinner {
              0% {
                -webkit-transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(360deg);
              }
            }
            @keyframes nprogress-spinner {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            `}
        </style>
      </Head>
      <Row>
        <Col
          xl={24}
          style={{
            maxWidth: '1366px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Space size={10}>
            <Link href='/'>
              <a>Under Palm Jobs</a>
            </Link>
            <Menu mode='horizontal'>
              <Menu.Item key='offers'>
                <Link href='/'>
                  <a>Offers</a>
                </Link>
              </Menu.Item>
              <Menu.Item key='companies'>
                <Link href='/companies'>
                  <a>Companies</a>
                </Link>
              </Menu.Item>
              {/* <Menu.Item key='blog' disabled>
              Blog
            </Menu.Item> */}
            </Menu>
          </Space>

          <div>
            <Menu mode='horizontal'>
              <Menu.Item key='postajob'>
                <Link href='/postJob'>
                  <a>
                    <Button type='primary'>Post a job (FREE!)</Button>
                  </a>
                </Link>
              </Menu.Item>
              {/* <Menu.Item key='about'>About us</Menu.Item>
            <Menu.Item key='contact'>Contact</Menu.Item> */}
              <Menu.Item key='login'>
                {user ? (
                  <span onClick={logout}>Logout</span>
                ) : (
                  <Link href='/login'>
                    <a>Login</a>
                  </Link>
                )}
              </Menu.Item>
            </Menu>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AntHeader;
