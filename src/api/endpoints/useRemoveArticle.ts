import { useState } from 'react';
import request from 'axios';
import { api } from '../api';
import { useAppStore } from '../../utils/store';

export const useRemoveArticle = () => {
  const [resolve, setResolve] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [pending, setPending] = useState(false);

  const { token } = useAppStore(state => ({
    token: state.token,
  }));

  const mutate = async (articleId?: string) => {
    try {
      setPending(true);
      const response = await api.delete(`/posts1/${articleId}`, {
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
