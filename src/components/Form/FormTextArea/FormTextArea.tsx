import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormTextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  (props, ref) => {
    const { className } = props;

    return (
      <textarea
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
