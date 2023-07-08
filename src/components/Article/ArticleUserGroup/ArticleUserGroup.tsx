import React from 'react';
import { twMerge } from 'tailwind-merge';
import { UserAvatar, UserCreatedAt, UserFullName } from '../../User';
import { IUser } from '../../../utils/types/types';

interface ArticleUserGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  user?: IUser;
}

export const ArticleUserGroup = (props: ArticleUserGroupProps) => {
  const { className, children, user } = props;

  return (
    <div
      className={twMerge(
        'article-user-group flex items-center space-x-2',
        className
      )}>
      <UserAvatar
        height='h-10'
        width='w-10'
        className='rounded-full'
        userAvatarUrl={user?.avatarUrl}
      />
      <div className='flex flex-col'>
        <UserFullName
          className='font-medium'
          userFullName={user?.fullName}
        />
        <UserCreatedAt
          className='text-sm'
          userCreatedAt={user?.createdAt}>
          Joined in
        </UserCreatedAt>
      </div>
    </div>
  );
};
