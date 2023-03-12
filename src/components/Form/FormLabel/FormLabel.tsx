import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FormLabelProps extends React.ComponentPropsWithoutRef<'label'> {}

export const FormLabel = (props: FormLabelProps) => {
  const { children, className } = props;
  return (
    <label
      {...props}
      className={twMerge('test text-lg font-medium p-2', className)}>
      {children}
    </label>
  );
};
