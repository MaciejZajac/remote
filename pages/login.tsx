import { Col, Row, Typography } from 'antd';
import Link from 'next/link';

import { GoogleLogin } from 'react-google-login';
import Login from '../components/Forms/Login';

// const responseGoogle = (response) => {
//   console.log(response);
// };

const LoginPage = () => {
  return (
    <div
    // style={{ display: 'flex', marginTop: '20px', justifyContent: 'center' }}
    >
      {/* <GoogleLogin
        clientId='674444083484-m4lhohqea5hmaou1f7eeja0ve79spkbv.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> */}
      <Login />
      <Row>
        <Col xl={14} offset={7}>
          <Typography.Text type='secondary'>
            Do not have account yet? <br />
            Create one <Link href='/register'>here</Link>
          </Typography.Text>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
