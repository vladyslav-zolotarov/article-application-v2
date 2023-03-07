import { UseFormRegister } from 'react-hook-form';
import { ILoginUser } from '../../../types/types';

export const registerEmail = (register: UseFormRegister<ILoginUser>) =>
  register('email', {
    required: 'This field is required. Please enter your email!',
    pattern: {
      value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      message: 'Invalid email.',
    },
  });
