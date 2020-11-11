import React from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const AntFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <Space size={20}>
        <a
          href='https://github.com/MaciejZajac'
          target='_blank'
          rel='norefferer'
        >
          <GithubOutlined width={50} />
        </a>
        <a
          href='https://www.linkedin.com/in/maciejzajac534/'
          target='_blank'
          rel='norefferer'
        >
          <LinkedinOutlined size={60} />
        </a>
        <span>@ Maciej Zając</span>
      </Space>
    </Footer>
  );
};

export default AntFooter;
