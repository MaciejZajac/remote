import { Button, Col, Menu, Row } from 'antd';
import Link from 'next/link';

const AntHeader = () => {
  return (
    <Row>
      <Col
        xl={18}
        offset={3}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <Menu mode='horizontal'>
            <Menu.Item key='logo'>Under Palm Jobs</Menu.Item>
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
        </div>

        <div>
          <Menu mode='horizontal'>
            <Menu.Item key='postajob'>
              <Button type='primary'>Post a job (FREE!)</Button>
            </Menu.Item>
            {/* <Menu.Item key='about'>About us</Menu.Item>
            <Menu.Item key='contact'>Contact</Menu.Item> */}
            <Menu.Item key='login'>Login</Menu.Item>
          </Menu>
        </div>
      </Col>
    </Row>
  );
};

export default AntHeader;
