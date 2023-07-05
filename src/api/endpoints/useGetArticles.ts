import { useQuery } from '@tanstack/react-query';
import { IArticle } from '../../types/types';
import { api } from '../api';

export const useGetArticles = () => {
  const fetchArticles = async (): Promise<IArticle[]> => {
    const response = await api.get('/posts');
    return response.data;
  };

  return useQuery({ queryKey: ['articles'], queryFn: fetchArticles });
};
