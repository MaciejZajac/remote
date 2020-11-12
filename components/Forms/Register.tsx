import { gql, useMutation } from '@apollo/client';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { useState } from 'react';
import Router from 'next/router';
const Register = () => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState<any>({});
  console.log('formData', formData);

  const onFinish = (values) => {
    setFormData(values);
    // console.log('Success:', values);
    createUser();
  };

  const [createUser, { data }] = useMutation(REGISTER_USER, {
    update(proxy, { data }) {
      Router.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0]?.extensions?.exception?.errors);
    },
    variables: formData,
  });

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row style={{ marginTop: '40px' }}>
      <Col xl={10} offset={7}>
        <Typography.Title level={2}>Register</Typography.Title>
        <Form name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input valid email',
                pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              },
            ]}
          >
            <Input placeholder='Email' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password',
                min: 4,
                max: 30,
              },
            ]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Form.Item
            name='confirmPassword'
            rules={[
              {
                required: true,
                message: 'Passwords must match',
                min: 4,
                max: 30,
              },
            ]}
          >
            <Input.Password placeholder='Confirm password' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

const REGISTER_USER = gql`
  mutation register($email: String!, $password: String!) {
    register(registerInput: { email: $email, password: $password }) {
      id
      email
      createdAt
      token
    }
  }
`;

export default Register;
