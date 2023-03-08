import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import request from 'axios';
import useSWRMutation from 'swr/mutation';
import { onLogin } from '../../api/endpoints';
import { loginURL } from '../../api/fetcher';
import { IRegisterForm } from '../../types/types';
import {
  FormButton,
  FormInput,
  FormErrorMessage,
  FormLabel,
  registerEmail,
  registerPassword,
} from '../../components/Form/index';

import { CgSpinnerTwo } from 'react-icons/cg';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<IRegisterForm>({ mode: 'onChange' });

  const { trigger } = useSWRMutation(loginURL, onLogin);

  const onHandleSubmit: SubmitHandler<IRegisterForm> = async formData => {
    try {
      const data = await trigger(formData);
      if ('token' in data) {
        document.cookie = `token=${data.token}`;
      }
    } catch (err) {
      if (request.isAxiosError(err) && err.response) {
        console.log('err', err.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='login_page__container'>
      <form
        className='py-9 max-w-sm mx-auto flex flex-col justify-center align-center'
        onSubmit={handleSubmit(onHandleSubmit)}>
        <h1 className='mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Login page
        </h1>

        <div className='email_input pb-6 mb-2 relative'>
          <FormLabel>Email</FormLabel>
          <FormInput
            {...registerEmail(register)}
            type='email'
            aria-describedby='helper-text-email'
            placeholder='name@gmail.com'
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </div>

        <div className='password_input pb-6 mb-2 relative'>
          <FormLabel>Password</FormLabel>
          <FormInput
            {...registerPassword(register)}
            type='password'
            aria-describedby='helper-text-password'
            placeholder='Your password'
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </div>

        <FormButton
          type='submit'
          disabled={!isValid}
          onClick={() => setIsLoading(true)}>
          {isLoading && <CgSpinnerTwo className='loading-spinner' />}
          Login
        </FormButton>
      </form>
    </div>
  );
};

export default LoginPage;
