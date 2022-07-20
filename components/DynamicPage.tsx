import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export type DynamicPageProps = {
  currentPage: '1' | '2';
  targetPage: '1' | '2';
};

export function DynamicPage({ currentPage, targetPage, children }: DynamicPageProps & { children: ReactNode }) {
  const router = useRouter();

  const handleRouteChange = () => {
    router.replace(`/page-${targetPage}`, undefined, { shallow: true });
  };

  return (
    <div>
      <h2>Page {currentPage}</h2>
      <p>This is the {currentPage} page</p>

      <Link href={`/page-${targetPage}`} shallow>
        <button>Go to Page {targetPage} (Link)</button>
      </Link>

      <button onClick={handleRouteChange}>Go to Page {targetPage} (Router)</button>

      {children}
    </div>
  );
}
