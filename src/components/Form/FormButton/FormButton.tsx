import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const FormButton = forwardRef<HTMLButtonElement, FormButtonProps>(
  (props, ref) => {
    const { children, className } = props;
    return (
      <button
        ref={ref}
        {...props}
        className={twMerge(
          'form_button mt-3 flex justify-center items-center bg-sky-700 text-sky-50 text-lg font-medium rounded-md py-3 px-3 border-4 border-transparent hover:bg-sky-900 hover:text-sky-100 hover:cursor-pointer relative focus:border-sky-800',
          className
        )}>
        {children}
      </button>
    );
  }
);
