import { useState } from 'react';

export type ComponentWithDataProps = {
  initialData?: string;
};

export function ComponentWithData({ initialData }: ComponentWithDataProps) {
  const [data, setData] = useState<string>(initialData || `client-value ${~~(Math.random() * 10000)}`);
  return <p>{data}</p>;
}
