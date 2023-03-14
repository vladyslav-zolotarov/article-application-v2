import React from 'react';
import useSWRMutation from 'swr/mutation';
import { onLogin } from '../../../api/endpoints';
import { loginURL } from '../../../api/fetcher';
import { twMerge } from 'tailwind-merge';
import { useAppStore, useUserStore } from '../../../utils/store';

interface AsideUserGroupProps extends React.ComponentPropsWithoutRef<'div'> {}

export const AsideUserGroup = (props: AsideUserGroupProps) => {
  const { className, children } = props;
  const { trigger } = useSWRMutation(loginURL, onLogin);

  const { userId } = useUserStore(state => ({
    userId: state.userId,
  }));

  const { token } = useAppStore(state => ({
    token: state.token,
  }));

  const content = () => {
    if (userId) {
      return children;
    }

    if (!userId && token !== '') {
      //get me
    }

    return null;
  };

  return <div className={twMerge('aside-user', className)}>{content()}</div>;
};
