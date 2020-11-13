import { GoogleLogin } from 'react-google-login';
import Register from '../components/Forms/Register';

// const responseGoogle = (response) => {
//   console.log(response);
// };

const Login = () => {
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
      <Register />
    </div>
  );
};

export default Login;
