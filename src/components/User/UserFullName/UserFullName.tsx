import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useUserStore } from '../../../utils/store';

interface UserFullNameProps extends React.ComponentPropsWithoutRef<'span'> {}

export const UserFullName = (props: UserFullNameProps) => {
  const { className, children } = props;

  const { userFullName } = useUserStore(state => ({
    userFullName: state.userFullName,
  }));

  return userFullName ? (
    <span className={twMerge('user-fullname block font-bold', className)}>
      {children} {userFullName}
    </span>
  ) : (
    <span className='user-fullname --skeleton' />
  );
};
