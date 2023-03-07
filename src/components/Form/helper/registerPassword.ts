import { UseFormRegister } from 'react-hook-form';
import { ILoginUser } from '../../../types/types';

export const registerPassword = (register: UseFormRegister<ILoginUser>) =>
  register('password', {
    required: 'This field is required. Please enter your password!',
    minLength: {
      value: 5,
      message: 'The password must be at least 5 characters long.',
    },
  });
