import { useQuery } from '@tanstack/react-query';
import { IArticle } from '../utils/types/types';
import { api } from '../utils/api/api';

export const useGetOneArticle = (id: string) => {
  const fetchOneArticle = async (id: string): Promise<IArticle> => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  };

  return useQuery({
    queryKey: ['fetchOneArticle', id],
    queryFn: () => fetchOneArticle(id),
  });
};
