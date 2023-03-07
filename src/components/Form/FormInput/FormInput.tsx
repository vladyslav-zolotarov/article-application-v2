import React, { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={
          'w-full p-3 mt-2 text-base font-medium bg-gray-200 text-gray-900  border-4 rounded-md border-transparent focus:outline-none focus:border-gray-300'
        }
      />
    );
  }
);
