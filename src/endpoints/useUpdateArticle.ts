import { api } from '../utils/api/api';
import { useAppStore } from '../utils/store';
import { IArticleForm } from '../utils/types/types';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

export const useUpdateArticle = (id: string) => {
  const { token } = useAppStore(state => ({
    token: state.token,
  }));
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: IArticleForm): Promise<IArticleForm> => {
      const response = await api.patch(`/posts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },

    onSuccess: () => {
      // queryClient.invalidateQueries(['fetchOneArticle', id]);
      queryClient.invalidateQueries(['articles']);
    },
  });
};
