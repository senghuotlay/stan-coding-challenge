import { useEffect, useState } from 'react';

type Props = {
  apiUrl: string;
  skip?: boolean;
};

export const useQuery = <T>({ apiUrl, skip }: Props) => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (skip) {
        return;
      }
      setLoading(true);

      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred. please try again later.');
        }
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
