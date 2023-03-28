import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useAppStore } from '../../../utils/store';
import { IoExitOutline } from 'react-icons/io5';
import { UserAvatar, UserCreatedAt, UserFullName } from '../../User';
import { useGetMe } from '../../../api/endpoints/useGetMe';

interface AsideUserGroupProps extends React.ComponentPropsWithoutRef<'div'> {}

export const AsideUserGroup = (props: AsideUserGroupProps) => {
  const { className, children } = props;
  const { token, userId, setToken } = useAppStore(state => ({
    token: state.token,
    userId: state.userId,
    setToken: state.setToken,
  }));

  const { data, isError } = useGetMe(token);

  if (isError) {
    return isError;
  }

  const content = () => {
    if (token && userId) {
      return (
        <>
          <UserAvatar
            height='h-10'
            width='w-1/6'
            userAvatarUrl={data?.avatarUrl}
          />
          <div className='flex flex-col w-4/6'>
            <UserFullName
              className=''
              userFullName={data?.fullName}
            />
            <UserCreatedAt
              className='text-xs'
              userCreatedAt={data?.createdAt}>
              Joined in
            </UserCreatedAt>
          </div>
          <button
            className='ml-5'
            onClick={() => setToken('', '')}>
            <IoExitOutline className='h-6 w-6' />
          </button>
        </>
      );
    }

    return null;
  };

  return (
    <div className={twMerge('aside-user space-x-2', className)}>
      {content()}
    </div>
  );
};
