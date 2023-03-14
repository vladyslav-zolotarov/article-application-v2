import React, { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { getMe } from '../../../api/endpoints';
import { getMeURL } from '../../../api/fetcher';
import { twMerge } from 'tailwind-merge';
import { useAppStore } from '../../../utils/store';
import { IoExitOutline } from 'react-icons/io5';
import { UserAvatar, UserCreatedAt, UserFullName } from '../../User';
import { IUser } from '../../../types/types';

interface AsideUserGroupProps extends React.ComponentPropsWithoutRef<'div'> {}

export const AsideUserGroup = (props: AsideUserGroupProps) => {
  const { className, children } = props;
  const { trigger } = useSWRMutation(getMeURL, getMe, {});
  const [data, setData] = useState<IUser>();

  const { token, userId, setToken } = useAppStore(state => ({
    token: state.token,
    userId: state.userId,
    setToken: state.setToken,
  }));

  useEffect(() => {
    (async () => {
      try {
        const response = await trigger(token);
        console.log(response);
        if (response) {
          setData(response);
        }
      } catch (err) {
        return null;
      }
    })();
  }, []);

  const content = () => {
    if (token && userId) {
      console.log(data);
      return (
        <>
          <UserAvatar
            height='h-10'
            width='w-1/6'
            className='mr-2'
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

    if (!userId && token !== '') {
      //get me
    }

    return null;
  };

  return <div className={twMerge('aside-user', className)}>{content()}</div>;
};
