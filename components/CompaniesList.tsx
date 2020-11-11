import React from 'react';
import Avatar from 'antd/lib/avatar/avatar';
import { Card, Col, Row, Space, Typography } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Link from 'next/link';
const { Meta } = Card;

const CompaniesList = () => {
  return (
    <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
      <Row gutter={18}>
        {companiesArr.map((item: ICompanyItem) => (
          <Col sm={8} key={item.companyId} style={{ margin: '10px 0' }}>
            <Link href='#'>
              <a>
                <Card hoverable>
                  <Space size={14}>
                    <Avatar
                      src={`//logo.clearbit.com/${item.website}`}
                      size={50}
                      alt={item.name + 'Logo'}
                    />
                    <div>
                      <div>
                        <Space size={14} align='baseline'>
                          <Typography.Title level={3} style={{ margin: '0' }}>
                            {item.name}
                          </Typography.Title>
                          <Typography.Text>{item.website}</Typography.Text>
                        </Space>
                      </div>
                      <Typography.Text>{item.shortDescription}</Typography.Text>
                    </div>
                  </Space>
                </Card>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CompaniesList;

interface ICompanyItem {
  address: {
    id: number;
  };
  companyId: string;
  companySize: string;
  companyType: string;
  companyUrl: string;
  jobOffersNumber: number;
  name: string;
  shortDescription: string;
  website: string;
}

const companiesArr: ICompanyItem[] = [
  {
    address: { id: 373 },
    companyId: '0xw3xg',
    companySize: '_1001_PLUS',
    companyType: 'STARTUP',
    companyUrl: '0xw3xg-stripe',
    jobOffersNumber: 19,
    name: 'Stripe',
    shortDescription: 'Stripe is the best way to accept payments',
    website: 'stripe.com',
  },
  {
    address: { id: 127 },
    companyId: 'vmkds8',
    companySize: '_51_250',
    companyType: 'SOFTWARE_HOUSE',
    companyUrl: 'vmkds8-clevertech',
    jobOffersNumber: 19,
    name: 'Clevertech',
    shortDescription: 'Building transformational digital solutions',
    website: 'clevertech.biz',
  },
  {
    address: { id: 598 },
    companyId: 'htftni',
    companySize: '_1001_PLUS',
    companyType: 'STARTUP',
    companyUrl: 'htftni-twitter',
    jobOffersNumber: 3,
    name: 'Twitter',
    shortDescription: 'We serve the public conversation',
    website: 'twitter.com',
  },
  {
    address: { id: 85 },
    companyId: 'jjrozu',
    companySize: '_51_250',
    companyType: 'STARTUP',
    companyUrl: 'jjrozu-netlify',
    jobOffersNumber: 3,
    name: 'Netlify',
    shortDescription: 'Developer platform for modern web projects',
    website: 'netlify.com',
  },
];
