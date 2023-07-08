import { useQuery } from '@tanstack/react-query';
import { IArticle } from '../utils/types/types';
import { api } from '../utils/api/api';

export const useGetArticles = () => {
  const fetchArticles = async (): Promise<IArticle[]> => {
    const response = await api.get('/posts');
    return response.data;
  };

  return useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });
};
