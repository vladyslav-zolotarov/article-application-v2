import React from 'react';

export const FormErrorMessage = (
  props: React.HTMLAttributes<HTMLSpanElement>
) => {
  const { children } = props;
  return (
    <span
      {...props}
      className={
        'form_error_message text-sm text-red-500 block absolute bottom-0'
      }>
      {children}
    </span>
  );
};
