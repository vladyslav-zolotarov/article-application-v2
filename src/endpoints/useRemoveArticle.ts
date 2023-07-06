import { useMutation } from '@tanstack/react-query';
import { api } from '../utils/api/api';
import { useAppStore } from '../utils/store';

export const useRemoveArticle = () => {
  const { token } = useAppStore(state => ({
    token: state.token,
  }));

  return useMutation({
    mutationFn: async (articleId: string) => {
      const response = await api.delete(`/posts/${articleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
  });
};
