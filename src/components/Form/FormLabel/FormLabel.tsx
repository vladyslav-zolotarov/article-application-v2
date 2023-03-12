import React from 'react';
import { twMerge } from 'tailwind-merge';

export const FormLabel = (
  props: React.LabelHTMLAttributes<HTMLLabelElement>
) => {
  const { children, className } = props;
  return (
    <label
      {...props}
      className={twMerge('test text-lg font-medium p-2', className)}>
      {children}
    </label>
  );
};
