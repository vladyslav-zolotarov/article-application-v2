import { UseFormRegister } from 'react-hook-form';
import { IArticleForm } from '../../../utils/types/types';

export const registerTags = (register: UseFormRegister<IArticleForm>) =>
  register('tags');
