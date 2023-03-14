import React from 'react';
import { RiUser3Fill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

interface UserAvatarProps extends React.ComponentPropsWithoutRef<'img'> {
  height?: string;
  width?: string;
  userAvatarUrl?: string;
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { className, height, width, userAvatarUrl } = props;

  return (
    <div className={twMerge('user-avatar', className, height, width)}>
      {userAvatarUrl ? (
        <img
          className='rounded-lg h-full w-full object-cover'
          alt={'user-avatar'}
          src={userAvatarUrl}
        />
      ) : (
        <div className='flex items-center justify-center rounded-lg w-full h-full bg-gray-300'>
          <RiUser3Fill className='h-1/4 w-1/4 text-gray-200' />
        </div>
      )}
    </div>
  );
};
