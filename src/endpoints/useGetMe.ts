import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/api/api';
import { IUser } from '../utils/types/types';

export const useGetMe = (token: string) => {
  const fetchUserInfo = async (): Promise<IUser> => {
    const response = await api.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  return useQuery({
    queryKey: ['userInfo', token],
    queryFn: () => fetchUserInfo(),
  });
};
