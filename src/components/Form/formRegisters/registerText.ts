import { UseFormRegister } from 'react-hook-form';
import { IArticleForm } from '../../../utils/types/types';

export const registerText = (register: UseFormRegister<IArticleForm>) =>
  register('text', {
    required: 'This field is required. Please enter text!',
    minLength: {
      value: 3,
      message: 'The text must be at least 3 characters long.',
    },
  });
