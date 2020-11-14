import { gql, useQuery } from '@apollo/client';
import { redirect } from 'next/dist/next-server/server/api-utils';
import Router, { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import AddJobOffer from '../components/Forms/AddJobOffer';
import { AuthContext } from '../context/AuthContext';

const ViewerQuery = gql`
  {
    viewer {
      email
      id
    }
  }
`;

const postJob = () => {
  // const router = useRouter();
  // const { user } = useContext(AuthContext);
  // console.log('user', user);

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/login');
  //   }
  // }, [user]);

  // if (!user) return <div />;

  return <AddJobOffer />;
};

export default postJob;
