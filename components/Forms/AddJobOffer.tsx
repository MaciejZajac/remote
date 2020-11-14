import { Form, Input, Button, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { PostJobContext } from '../../context/PostOfferContext';

const layout = {
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const AddJobOffer = () => {
  const router = useRouter();
  const { setSketch } = useContext(PostJobContext);
  const onFinish = (values) => {
    setSketch(values);
    router.push('/verifyOffer');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // https://github.com/hubgit/react-prosemirror
  return (
    <Form
      {...layout}
      name='basic'
      layout='vertical'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{
        maxWidth: '800px',
        margin: '40px auto 0',
      }}
    >
      <Typography.Title level={1}>
        First, tell us about the position
      </Typography.Title>
      <Form.Item
        label='Job Title'
        name='jobTitle'
        extra='Example: “Senior Designer”. Titles must describe one position.'
        rules={[
          {
            required: true,
            message: 'Please enter a valid job title',
            min: 4,
            max: 30,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        label='Category'
        name='category'
        rules={[
          {
            required: true,
            message: 'Please enter a valid job title',
            min: 4,
            max: 30,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label='Category' name='category' rules={[{ required: true }]}>
        <Select placeholder='Select job specification' allowClear>
          <Option value='design'>Design</Option>
          <Option value='programming'>Programming</Option>
          <Option value='customer support'>Customer support</Option>
          <Option value='devops'>DevOps</Option>
          <Option value='salesandmarketing'>Sales and Marketing</Option>
          <Option value='businessmanagement'>Business, Management</Option>
          <Option value='product'>Product</Option>
          <Option value='other'>Other</Option>
        </Select>
      </Form.Item>

      <Form.Item name='checkbox-group' label='Checkbox.Group'>
        <Checkbox.Group>
          <Checkbox value='fulltime'>Full-Time</Checkbox>
          <Checkbox value='Contract'>Contract</Checkbox>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item
        label='How to Apply'
        name='howtoapply'
        extra='Link to Application page or Email address'
        rules={[
          {
            required: true,
            message: 'Please enter a valid link',
            min: 4,
            max: 30,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label='Job Description'
        name='jobdescription'
        extra='Write a little more about the position'
        rules={[
          {
            required: true,
            message: 'This field can not be blank',
            min: 4,
            max: 30,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Typography.Title level={2}>
        Tell Us More About Your Company
      </Typography.Title>

      <Form.Item
        label='Company  Name'
        name='companyname'
        extra='Enter your company or organization’s name.'
        rules={[
          {
            required: true,
            message: 'This field can not be blank',
            min: 4,
            max: 30,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Company Statement'
        name='companystatement'
        extra='Enter your company or organization’s mission statement. This will be displayed on your company’s profile.'
        rules={[
          {
            required: true,
            message: 'This field can not be blank',
            min: 4,
            max: 30,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Company's Website URL"
        name='companywebsiteurl'
        extra='Example: https://mybusiness.com/'
        rules={[
          {
            required: true,
            message: 'This field can not be blank',
            min: 4,
            max: 30,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Email'
        name='companyemail'
        extra='We’ll send your receipt and confirmation email here.'
        rules={[
          {
            required: true,
            message: 'This field can not be blank',
            min: 4,
            max: 30,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Company Description'
        name='companycescription'
        rules={[{ message: 'This field can not be blank' }]}
      >
        <Input.TextArea />
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button
          size='large'
          type='primary'
          htmlType='submit'
          style={{ float: 'right' }}
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddJobOffer;
