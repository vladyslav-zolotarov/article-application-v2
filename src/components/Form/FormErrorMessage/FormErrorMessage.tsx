import React from 'react';
import { twMerge } from 'tailwind-merge';

export const FormErrorMessage = (
  props: React.HTMLAttributes<HTMLSpanElement>
) => {
  const { children, className } = props;
  return (
    <span
      {...props}
      className={twMerge(
        'form_error_message text-sm text-red-500 block absolute bottom-0',
        className
      )}>
      {children}
    </span>
  );
};
