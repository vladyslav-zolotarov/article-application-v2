import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { IUser } from '../../types/types';

export const useGetMe = (token: string) => {
  const fetchUserInfo = async (token: string): Promise<IUser> => {
    const response = await api.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  return useQuery({
    queryKey: ['userInfo', token],
    queryFn: () => fetchUserInfo(token),
  });
};
