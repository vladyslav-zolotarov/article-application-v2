import { UseFormRegister } from 'react-hook-form';
import { IRegisterForm } from '../../../types/types';

export const registerPassword = (register: UseFormRegister<IRegisterForm>) =>
  register('password', {
    required: 'This field is required. Please enter your password!',
    minLength: {
      value: 5,
      message: 'The password must be at least 5 characters long.',
    },
  });
