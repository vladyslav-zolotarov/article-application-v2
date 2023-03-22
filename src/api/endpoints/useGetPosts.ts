import { useEffect, useState } from 'react';
import request from 'axios';
import { IArticle } from '../../types/types';
import { useArticleStore } from '../../utils/store';
import { api } from '../api';

export const useGetPosts = (userId?: string) => {
  const [data, setData] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  const { setMyArticleList } = useArticleStore(state => ({
    setMyArticleList: state.setMyArticleList,
  }));

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const response = await api.get('/posts');

        setData(response.data);
        if (userId) {
          setMyArticleList(response.data, userId);
        }
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
