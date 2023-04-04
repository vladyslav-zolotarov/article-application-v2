import { useState } from 'react';
import { IArticle, IArticleForm } from '../../types/types';
import { useAppStore } from '../../utils/store';
import { api } from '../api';
import request from 'axios';

export const useAddNewArticle = () => {
  const [response, setResponse] = useState<IArticle>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { token } = useAppStore(state => ({
    token: state.token,
  }));

  const mutate = async (data: IArticleForm) => {
    try {
      setIsLoading(true);

      const res = await api.post<IArticle>('/posts', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res) {
        setResponse(res.data);
      }
    } catch (err) {
      if (request.isAxiosError(err) && err.response) {
        setIsError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, isError, mutate };
};
