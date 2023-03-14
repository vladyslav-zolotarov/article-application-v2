import React from 'react';
import format from 'date-fns/format';
import { twMerge } from 'tailwind-merge';

interface UserCreatedAtProps extends React.ComponentPropsWithoutRef<'span'> {
  userCreatedAt?: string;
}

export const UserCreatedAt = (props: UserCreatedAtProps) => {
  const { className, children, userCreatedAt } = props;

  return userCreatedAt ? (
    <span className={twMerge('user-fullname block', className)}>
      {children} {format(new Date(`${userCreatedAt}`), 'dd MMMM yyyy')}
    </span>
  ) : (
    <span className='user-createdAt --skeleton block bg-gray-300 rounded-lg h-3 w-full' />
  );
};
