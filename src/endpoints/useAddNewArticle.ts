import { useMutation } from '@tanstack/react-query';
import { IArticle, IArticleForm } from '../utils/types/types';
import { useAppStore } from '../utils/store';
import { api } from '../utils/api/api';

export const useAddNewArticle = () => {
  const { token } = useAppStore(state => ({
    token: state.token,
  }));

  return useMutation({
    mutationFn: async (data: IArticleForm): Promise<IArticleForm> => {
      const response = await api.post<IArticle>('/posts', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
  });
};
