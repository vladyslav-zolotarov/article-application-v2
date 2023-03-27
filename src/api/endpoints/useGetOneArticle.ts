import { useEffect, useState } from 'react';
import request from 'axios';
import { IArticle } from '../../types/types';
import { api } from '../api';

export const useGetOneArticle = (userId?: string) => {
  const [data, setData] = useState<IArticle>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await api.get(`/posts/${userId}`);
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
