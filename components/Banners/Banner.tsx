import React from 'react';
import { Button, Col, Divider, Row, Space, Typography } from 'antd';
import Link from 'next/link';

const Banner = () => {
  return (
    <Row>
      <Divider />
      <Col
        xl={24}
        style={{ padding: '30px 0 50px', margin: '0 auto', maxWidth: '1366px' }}
      >
        <Space size={20} direction='vertical'>
          <Typography.Title level={2} style={{ marginBottom: '0' }}>
            Under Palm Jobs
          </Typography.Title>
          <Typography.Text>
            We strongly encourage employers to embrace diversity, equity, and
            inclusion as fundamental values when hiring through We Work
            Remotely.
          </Typography.Text>
          <Link href='#'>
            <a>
              <Button type='primary'>Post a job</Button>
            </a>
          </Link>
        </Space>
      </Col>
    </Row>
  );
};

export default Banner;
