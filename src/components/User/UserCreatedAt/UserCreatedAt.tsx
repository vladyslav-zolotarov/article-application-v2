import React from 'react';
import format from 'date-fns/format';
import { twMerge } from 'tailwind-merge';
import { useUserStore } from '../../../utils/store';

interface UserCreatedAtProps extends React.ComponentPropsWithoutRef<'span'> {}

export const UserCreatedAt = (props: UserCreatedAtProps) => {
  const { className, children } = props;

  const { userCreatedAt } = useUserStore(state => ({
    userCreatedAt: state.userCreatedAt,
  }));

  return userCreatedAt ? (
    <span className={twMerge('user-fullname block', className)}>
      {children} {format(new Date(`${userCreatedAt}`), 'dd MMMM yyyy')}
    </span>
  ) : (
    <span className='user-fullname --skeleton' />
  );
};
