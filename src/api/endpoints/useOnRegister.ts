import { useState } from 'react';
import { api } from '../api';
import request from 'axios';
import { IRegisterForm } from '../../types/types';
import { useAppStore } from '../../utils/store';

export const useOnRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  const { setToken } = useAppStore(state => ({
    setToken: state.setToken,
  }));

  const mutate = async (formData: IRegisterForm) => {
    try {
      setIsLoading(true);

      const response = await api.post('/auth/register', formData);
      if ('token' in response.data) {
        setToken(response.data.token, response.data._id);
      }
    } catch (err) {
      if (request.isAxiosError(err) && err.response) {
        setIsError(err.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, mutate };
};
