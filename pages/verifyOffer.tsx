import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { PostJobContext } from '../context/PostOfferContext';

const VerifyOffer = () => {
  const router = useRouter();
  const { sketchData } = useContext(PostJobContext);
  console.log('sketchData', sketchData);

  useEffect(() => {
    if (Object.keys(sketchData).length === 0) {
      router.push('/postJob');
    }
  }, [sketchData]);

  return <div>hello</div>;
};

export default VerifyOffer;
