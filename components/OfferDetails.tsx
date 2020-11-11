import React from 'react';
import {
  Avatar,
  Button,
  Col,
  Divider,
  PageHeader,
  Row,
  Space,
  Typography,
} from 'antd';
import { useRouter } from 'next/router';
const { Title, Text } = Typography;
import Link from 'next/link';
interface IOfferDetails {
  offerDetails: IOfferNode;
}

const OfferDetails = ({ offerDetails }: IOfferDetails) => {
  const router = useRouter();
  const handleApplyAction = () => {
    console.log('handleApplyAction@@@');
  };
  return (
    <div style={{ maxWidth: '1366px', margin: '0 auto' }}>
      <PageHeader
        className='site-page-header'
        onBack={() => router.back()}
        title={offerDetails.companyName}
        subTitle={offerDetails.jobTitle}
      />
      <Row>
        <Col xl={24}>
          <Space size={30}>
            <a
              href={'https://' + offerDetails.companyWebsite}
              target='_blank'
              rel='norefferer'
            >
              <Avatar
                shape='square'
                src={`//logo.clearbit.com/${offerDetails.companyWebsite}`}
                size={100}
                alt={offerDetails.companyName + 'Logo'}
              />
            </a>

            <Space size={20}>
              <Space direction='vertical' size={8}>
                <a
                  href={'https://' + offerDetails.companyWebsite}
                  target='_blank'
                  rel='norefferer'
                >
                  <Title level={2} style={{ marginBottom: '0' }}>
                    {offerDetails.companyName}
                  </Title>
                </a>
                <Text style={{ fontSize: '20px' }}>
                  {offerDetails.salaryFrom} - {offerDetails.salaryTo}{' '}
                  {offerDetails.currency}
                </Text>
                <Button size='large' type='primary' onClick={handleApplyAction}>
                  Apply
                </Button>
              </Space>
            </Space>
          </Space>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col xl={24}>
          <Space direction='vertical'>
            <Title level={3} style={{ marginBottom: '3px' }}>
              Requirements
            </Title>
            <Text>
              Main skills required: {offerDetails.mainSkills.join(', ')}
            </Text>
            <Text>Must have: {offerDetails.mustHaveSkills.join(', ')}</Text>
            <Text>
              Nice to have: {offerDetails.niceToHaveSkills.join(', ')}
            </Text>
          </Space>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col xl={24}>
          <Space direction='vertical'>
            <Title level={3} style={{ marginBottom: '3px' }}>
              Description
            </Title>

            <Text>{offerDetails.description}</Text>
          </Space>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col xl={24}>
          <Space direction='vertical'>
            <Title level={3} style={{ marginBottom: '3px' }}>
              Apply
            </Title>
            <Text>
              You will be redirected to external form. Press the button below to
              proceed.
            </Text>
            <Button size='large' type='primary' onClick={handleApplyAction}>
              Apply
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default OfferDetails;

export interface IOfferNode {
  companyName: string;
  companyUrl: string;
  companyWebsite: string;
  coverImageUuid: string;
  creationDate: string;
  currency: string;
  description: string;
  externalOffer: true;
  hasApplicationURL: true;
  jobTitle: string;
  mainSkills: string[];
  mustHaveSkills: string[];
  niceToHaveSkills: string[];
  offerId: string;
  offerUrl: string;
  publishStatus: string;
  salaryFrom: number;
  salaryTo: number;
  startDate: string;
  technology: string;
  timezone: string;
  workType: string;
}
