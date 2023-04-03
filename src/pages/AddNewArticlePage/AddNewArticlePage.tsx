import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddNewArticle } from '../../api/endpoints/useAddNewArticle';
import {
  FormButton,
  FormErrorMessage,
  FormInput,
  FormLabel,
  registerTags,
  registerText,
  registerTitle,
} from '../../components/Form';
import { IArticleForm } from '../../types/types';

export const AddNewArticlePage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<IArticleForm>({ mode: 'onChange' });

  const { response, isLoading, isError, mutate } = useAddNewArticle();

  const onHandleSubmit: SubmitHandler<IArticleForm> = formData => {
    mutate(formData);
  };

  return (
    <div className='add_new_article_page__container'>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className='title_input relative'>
          <FormLabel>
            <span>Title</span>
          </FormLabel>
          <FormInput
            {...registerTitle(register)}
            type='text'
            aria-describedby='helper-text-title'
            placeholder='Input title'
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </div>

        <div className='text_input relative'>
          <FormLabel>
            <span>Text</span>
          </FormLabel>
          <FormInput
            {...registerText(register)}
            type='text'
            aria-describedby='helper-text-text'
            placeholder='Input text'
          />
          <FormErrorMessage>{errors.text?.message}</FormErrorMessage>
        </div>

        <div className='text_tags relative'>
          <FormLabel>
            <span>Tags</span>
          </FormLabel>
          <FormInput
            {...registerTags(register)}
            type='text'
            aria-describedby='helper-text-tags'
            placeholder='Input tags'
          />
          <FormErrorMessage>{errors.tags?.message}</FormErrorMessage>
        </div>

        <FormButton
          type='submit'
          disabled={!isValid}>
          {/* {isLoading && <CgSpinnerTwo className='loading-spinner mr-2' />} */}
          Add 😗
        </FormButton>
      </form>
    </div>
  );
};
