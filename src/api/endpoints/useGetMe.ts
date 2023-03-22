import { useEffect, useState } from 'react';
import { api } from '../api';
import request from 'axios';
import { IUser } from '../../types/types';

export const useGetMe = (token: string) => {
  const [data, setData] = useState<IUser>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await api.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
      } catch (err) {
        if (request.isAxiosError(err) && err.response) {
          setIsError(err.response.data.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, isError };
};
