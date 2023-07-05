import { useForm, SubmitHandler } from 'react-hook-form';
import { IRegisterForm } from '../../types/types';
import { CgSpinnerTwo } from 'react-icons/cg';
import { IoRocket } from 'react-icons/io5';
import { useOnLogin } from '../../api/endpoints/useOnLogin';
import {
  FormButton,
  FormInput,
  FormErrorMessage,
  FormLabel,
  registerEmail,
  registerPassword,
} from '../../components/Form/index';

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<IRegisterForm>({ mode: 'onChange' });

  const { isError, isLoading, mutate } = useOnLogin();

  const onHandleSubmit: SubmitHandler<IRegisterForm> = async formData => {
    mutate(formData);
  };

  return (
    <div className='login_page__container'>
      <form
        className='py-9 max-w-sm mx-auto flex flex-col justify-center align-center'
        onSubmit={handleSubmit(onHandleSubmit)}>
        <IoRocket className='w-16 h-16 mx-auto mb-8' />
        <h1 className='mb-6 text-6xl font-extrabold text-gray-900 text-center'>
          Login
        </h1>

        <div className='email_input pb-6 mb-2 relative'>
          <FormLabel>
            📧 <span className='ml-2'>Email</span>
          </FormLabel>
          <FormInput
            {...registerEmail(register)}
            type='email'
            aria-describedby='helper-text-email'
            placeholder='name@gmail.com'
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </div>

        <div className='password_input pb-6 mb-2 relative'>
          <FormLabel>
            🐭<span className='ml-2'>Password</span>
          </FormLabel>
          <FormInput
            {...registerPassword(register)}
            type='password'
            aria-describedby='helper-text-password'
            placeholder='Your password'
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </div>

        <FormButton
          className='mb-5'
          type='submit'
          disabled={!isValid}>
          {isLoading && <CgSpinnerTwo className='loading-spinner mr-2' />}
          Login 🥷
        </FormButton>

        {isError && (
          <div className='relative mt-5 flex justify-center'>
            <FormErrorMessage>{isError}</FormErrorMessage>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
