import { createContext, useEffect, useReducer } from 'react';
import cookieCutter from 'cookie-cutter';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';

interface IAuthContext {
  user: any;
  login: (item: any) => void;
  logout: () => void;
}
const initialContext: IAuthContext = {
  user: null,
  login: (data: any) => {},
  logout: () => {},
};

const initialState = {
  user: null,
};
// if (localStorage.getItem('jwtToken')) {
//   const decodedToken: any = jwtDecode(
//     localStorage.getItem('jwtToken') as string
//   );

//   if (decodedToken.exp * 1000 < Date.now()) {
//     localStorage.removeItem('jwtToken');
//   } else {
//     initialState.user = decodedToken;
//   }
// }

const AuthContext = createContext(initialContext);

function authReducer(state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

interface ILoginData {
  login: {
    createdAt: string;
    email: string;
    id: string;
    token: string;
  };
}
function AuthProvider(props: any) {
  const apolloClient = useApolloClient();
  const router = useRouter();
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const cookie = cookieCutter.get('token');
    if (cookie) {
      // const decoded = jwt.
      const decoded: any = jwt_decode(cookie);
      const user = {
        email: decoded.email,
        id: decoded.id,
      };
      console.log('user', user);
      dispatch({
        type: 'LOGIN',
        payload: user,
      });
    }
  }, []);

  function login({ login }: ILoginData) {
    const { token, email, id } = login;
    cookieCutter.set('token', token);
    const user = {
      email,
      id,
    };
    dispatch({
      type: 'LOGIN',
      payload: user,
    });
  }

  async function logout() {
    await apolloClient.clearStore();
    cookieCutter.set('token', '', { expires: new Date(0) });

    // localStorage.removeItem('jwtToken');
    dispatch({ type: 'LOGOUT' });
    router.push('/');
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
