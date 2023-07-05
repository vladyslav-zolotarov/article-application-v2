import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddNewArticle } from '../../api/endpoints/useAddNewArticle';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import {
  FormButton,
  FormErrorMessage,
  FormInput,
  FormLabel,
  FormTextArea,
  registerTags,
  registerText,
  registerTitle,
} from '../../components/Form';
import { IArticleForm } from '../../types/types';

const AddNewArticlePage = () => {
  let navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<IArticleForm>({ mode: 'onChange' });

  const { data, isLoading, isError, mutate } = useAddNewArticle();

  if (isError) {
    alert('ERROR');
  }

  useEffect(() => {
    if (data) {
      navigate(`/post/${data._id}`);
    }
  }, [data]);

  const onHandleSubmit: SubmitHandler<IArticleForm> = formData => {
    mutate(formData);
  };

  return (
    <div className='add_new_article_page__container'>
      <h1 className='mb-6 text-6xl font-extrabold text-gray-900 text-center'>
        Adding new article
      </h1>

      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className='title_input relative pb-6'>
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

        <div className='text_input relative pb-6'>
          <FormLabel>
            <span>Text</span>
          </FormLabel>
          <FormTextArea
            {...registerText(register)}
            type='text'
            aria-describedby='helper-text-text'
            placeholder='Input text'
          />
          <FormErrorMessage>{errors.text?.message}</FormErrorMessage>
        </div>

        <div className='text_tags relative pb-6'>
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

        <div className='button_group flex justify-center'>
          <FormButton
            type='submit'
            disabled={!isValid}
            className={'w-44'}>
            {isLoading && <CgSpinnerTwo className='loading-spinner mr-2' />}
            Add ✏️
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default AddNewArticlePage;
