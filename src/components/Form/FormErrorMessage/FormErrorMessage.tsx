import React, { forwardRef } from 'react';

interface FormErrorMessageProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const FormErrorMessage = forwardRef<
  HTMLSpanElement,
  FormErrorMessageProps
>((props, ref) => {
  const { children } = props;
  return (
    <span
      ref={ref}
      {...props}
      className={
        'form_error_message text-sm text-red-500 block absolute bottom-0'
      }>
      {children}
    </span>
  );
});
