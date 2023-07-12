import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useNavigate, useParams } from 'react-router-dom';
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
import { IArticleForm } from '../../utils/types/types';
import { useGetOneArticle } from '../../endpoints/useGetOneArticle';
import { useUpdateArticle } from '../../endpoints/useUpdateArticle';

const EditArticlePage = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const { data, isError, isLoading, isFetching } = useGetOneArticle(id);
  const { isLoading: loading, isSuccess, mutate } = useUpdateArticle(id);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IArticleForm>({
    mode: 'onChange',
  });

  useEffect(() => {
    if (Array.isArray(data?.tags)) {
      reset({
        title: data?.title,
        text: data?.text,
        tags: data?.tags.join(' '),
      });
    } else reset({ title: data?.title, text: data?.text, tags: data?.tags });
  }, [data]);

  const onHandleSubmit: SubmitHandler<IArticleForm> = formData => {
    if (data) {
      mutate(formData);
      navigate(-1);
    }
  };

  return (
    <div className='add_new_article_page__container'>
      {isLoading || isFetching && <div className='loading-wrapper'>
        <h2 className='loading-text'>Loading...</h2>
      </div>}

      {isError && <div className='loading-wrapper'>
        <h2 className='loading-text'>Error...</h2>
      </div>}

      <h1 className='mb-6 text-6xl font-extrabold text-gray-900 text-center'>
        Edit article
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
            defaultValue={data && data.title}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </div>

        <div className='text_input relative pb-6'>
          <FormLabel>
            <span>Text</span>
          </FormLabel>
          <FormTextArea
            {...registerText(register)}
            className='h-28'
            type='text'
            aria-describedby='helper-text-text'
            placeholder='Input text'
            defaultValue={data && data.text}
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
            defaultValue={data && data.tags}
          />
          <FormErrorMessage>{errors.tags?.message}</FormErrorMessage>
        </div>

        <div className='button_group flex justify-center'>
          <FormButton
            type='submit'
            // disabled={!isValid}
            className={'w-44'}>
            {loading && <CgSpinnerTwo className='loading-spinner mr-2' />}
            Submit ✏️
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default EditArticlePage;
