import { UseFormRegister } from 'react-hook-form';
import { IRegisterForm } from '../../../types/types';

export const registerFullName = (register: UseFormRegister<IRegisterForm>) =>
  register('fullName', {
    required: 'This field is required. Please enter your name!',
    minLength: {
      value: 3,
      message: 'The name must be at least 3 characters long.',
    },
  });
