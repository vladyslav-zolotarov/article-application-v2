import React from 'react';
import { twMerge } from 'tailwind-merge';

interface AsideNavigationProps
  extends React.ComponentPropsWithoutRef<'aside'> {}

export const AsideNavigation = (props: AsideNavigationProps) => {
  const { className, children } = props;

  return (
    <nav className={twMerge('navbar', className)}>
      <ul className='h-full flex flex-col'>{children}</ul>
    </nav>
  );
};
