import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/page-1');
  }, [router]);

  return <p>redirecting</p>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { redirect: '/page-1', props: {} };
};

export default Home;
