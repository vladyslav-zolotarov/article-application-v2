import { useMutation } from '@tanstack/react-query';
import { api } from '../api';
import { IRegisterForm, IUser } from '../../types/types';
import { useAppStore } from '../../utils/store';

export const useOnRegister = () => {
  const { setToken } = useAppStore(state => ({
    setToken: state.setToken,
  }));

  return useMutation({
    mutationFn: async (formData: IRegisterForm): Promise<IUser> => {
      const response = await api.post('/auth/register', formData);
      return response.data;
    },
    onSuccess: data => {
      if ('token' in data) {
        setToken(data.token, data._id);
      }
    },
  });
};
