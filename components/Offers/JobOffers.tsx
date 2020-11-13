import { Card, Col, Row, Space, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Banner from '../Banners/Banner';
import Link from 'next/link';
const JobOffers = () => {
  return (
    <div>
      <Row>
        <Col xl={24}>
          {pageItems.map((item: IPageItem) => (
            <Link href={`/offer/${item.companyName}`} key={item.offerId}>
              <a>
                <Card style={{ margin: '15px 0' }}>
                  <Space size={20}>
                    <Avatar
                      src={`//logo.clearbit.com/${item.companyWebsite}`}
                      size={50}
                      alt={item.companyName + 'Logo'}
                    />
                    <div>
                      <Space size={10} align='baseline'>
                        <Typography.Title
                          level={3}
                          style={{ marginBottom: '0px' }}
                        >
                          {item.jobTitle}
                        </Typography.Title>
                        <Typography.Text>for</Typography.Text>
                        <Typography.Text>{item.companyName}</Typography.Text>
                      </Space>
                      <div>
                        <Typography.Text>
                          {item.salaryFrom} - {item.salaryTo} {item.currency}
                        </Typography.Text>
                      </div>
                    </div>
                  </Space>
                </Card>
              </a>
            </Link>
          ))}
        </Col>
      </Row>

      <Banner />
    </div>
  );
};

export default JobOffers;

interface IPageItem {
  companyName: string;
  companyWebsite: string;
  currency: string;
  jobTitle: string;
  mainSkills: string[];
  offerId: string;
  offerUrl: string;
  salaryFrom: number;
  salaryTo: number;
  timezone: string;
  workType: string;
}
const pageItems: IPageItem[] = [
  {
    companyName: 'Mediavine',
    companyWebsite: 'mediavine.com',
    currency: 'USD',
    jobTitle: 'Web Developer',
    mainSkills: ['Subversion / Git', 'WordPress'],
    offerId: 'k0euv8',
    offerUrl: 'k0euv8-mediavine-web-developer',
    salaryFrom: 5417,
    salaryTo: 7084,
    timezone: 'AMERICAS',
    workType: 'FULL_TIME',
  },
  {
    companyName: 'Mediavine',
    companyWebsite: 'mediavine.com',
    currency: 'USD',
    jobTitle: 'Senior Front-End Engineer',
    mainSkills: ['JavaScript / TypeScript', 'React', 'HTML / CSS'],
    offerId: 'dm62y4',
    offerUrl: 'dm62y4-mediavine-senior-front-end-engineer',
    salaryFrom: 8750,
    salaryTo: 10000,
    timezone: 'AMERICAS',
    workType: 'FULL_TIME',
  },
  {
    companyName: 'ClawRock',
    companyWebsite: 'clawrock.com',
    currency: 'PLN',
    jobTitle: 'Magento Frontend Developer',
    mainSkills: ['Magento', 'PHP', 'JavaScript'],
    offerId: 't4e8xq',
    offerUrl: 't4e8xq-clawrock-magento-frontend-developer',
    salaryFrom: 9000,
    salaryTo: 13000,
    timezone: 'ANY',
    workType: 'FULL_TIME',
  },
  {
    companyName: 'ClawRock',
    companyWebsite: 'clawrock.com',
    currency: 'PLN',
    jobTitle: 'Senior PHP Developer',
    mainSkills: ['PHP', 'MySQL'],
    offerId: 'xpxzpu',
    offerUrl: 'xpxzpu-clawrock-senior-php-developer',
    salaryFrom: 7000,
    salaryTo: 12000,
    timezone: 'ANY',
    workType: 'FULL_TIME',
  },
  {
    companyName: 'Startup House',
    companyWebsite: 'start-up.house',
    currency: 'PLN',
    jobTitle: 'Node.js Developer',
    mainSkills: ['JavaScript', 'Node.js'],
    offerId: 'l5xl38',
    offerUrl: 'l5xl38-startup-house-node-js-developer',
    salaryFrom: 7000,
    salaryTo: 13000,
    timezone: 'ANY',
    workType: 'FULL_TIME',
  },
];
