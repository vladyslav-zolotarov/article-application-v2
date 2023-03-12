import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const { className } = props;

    return (
      <input
        ref={ref}
        {...props}
        className={twMerge(
          'w-full p-3 mt-2 text-base font-medium bg-gray-200 text-gray-900  border-4 rounded-md border-transparent focus:outline-none focus:border-gray-300',
          className
        )}
      />
    );
  }
);
