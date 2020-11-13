import { gql, useQuery } from '@apollo/client';
import { redirect } from 'next/dist/next-server/server/api-utils';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';

const ViewerQuery = gql`
  {
    viewer {
      email
      id
    }
  }
`;

const postJob = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery(ViewerQuery);
  console.log('data', data);
  console.log(' loading', loading);
  console.log(' error', error);
  const shouldRedirect = !(!loading || data);
  console.log('shouldRedirect', shouldRedirect);

  useEffect(() => {
    if (shouldRedirect) {
      router.replace('/login');
    }
  }, [shouldRedirect]);

  if (loading) return null;

  return (
    <div>
      <h1>Lets create a job!</h1>
    </div>
  );
};

export default postJob;
