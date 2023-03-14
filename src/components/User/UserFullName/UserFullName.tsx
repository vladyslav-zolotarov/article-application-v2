import React from 'react';
import { twMerge } from 'tailwind-merge';

interface UserFullNameProps extends React.ComponentPropsWithoutRef<'span'> {
  userFullName?: string;
}

export const UserFullName = (props: UserFullNameProps) => {
  const { className, children, userFullName } = props;

  return userFullName ? (
    <span className={twMerge('user-fullname block font-bold', className)}>
      {children} {userFullName}
    </span>
  ) : (
    <span className='user-fullname --skeleton block bg-gray-300 mb-1 rounded-lg h-4 w-1/2' />
  );
};
