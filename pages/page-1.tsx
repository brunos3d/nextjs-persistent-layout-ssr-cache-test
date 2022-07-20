import type { ReactElement } from 'react';
import type { GetServerSideProps } from 'next';

import type { NextPageWithLayout } from './_app';
import { Layout } from '../components/Layout';
import { ComponentWithData } from '../components/ComponentWithData';
import { DynamicPage, DynamicPageProps } from '../components/DynamicPage';

export type PageProps = DynamicPageProps & {
  data: string;
};

const Page: NextPageWithLayout<PageProps> = ({ currentPage, targetPage, data }: PageProps) => {
  return (
    <div>
      <DynamicPage currentPage={currentPage} targetPage={targetPage}>
        <ComponentWithData initialData={data} />
      </DynamicPage>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');

  return { props: { currentPage: '1', targetPage: '2', data: `server-value ${~~(Math.random() * 10000)}` } };
};

export default Page;
