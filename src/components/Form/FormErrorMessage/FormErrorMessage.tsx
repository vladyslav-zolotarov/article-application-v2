import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FormErrorMessageProps
  extends React.ComponentPropsWithoutRef<'span'> {}

export const FormErrorMessage = (props: FormErrorMessageProps) => {
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
