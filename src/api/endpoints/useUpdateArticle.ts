import { useState } from 'react';
import request from 'axios';
import { api } from '../api';
import { useAppStore } from '../../utils/store';
import { IArticleForm } from '../../types/types';

export const useUpdateArticle = () => {
  const [resolve, setResolve] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [pending, setPending] = useState(false);

  const { token } = useAppStore(state => ({
    token: state.token,
  }));

  const mutate = async (id: string, data: IArticleForm) => {
    try {
      setPending(true);
      const response = await api.patch(`/posts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        setResolve(response.data.succes);
      }
    } catch (err) {
      if (request.isAxiosError(err) && err.response) {
        setRejected(true);
      }
    } finally {
      setPending(false);
    }
  };

  return { resolve, rejected, pending, mutate };
};
