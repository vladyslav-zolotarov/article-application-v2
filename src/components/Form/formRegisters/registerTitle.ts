import { UseFormRegister } from 'react-hook-form';
import { IArticleForm } from '../../../types/types';

export const registerTitle = (register: UseFormRegister<IArticleForm>) =>
  register('title', {
    required: 'This field is required. Please enter title!',
    minLength: {
      value: 3,
      message: 'The title must be at least 3 characters long.',
    },
  });
