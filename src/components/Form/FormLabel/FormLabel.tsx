import React from 'react';

export const FormLabel = (
  props: React.LabelHTMLAttributes<HTMLLabelElement>
) => {
  const { children } = props;
  return (
    <label
      {...props}
      className={'test text-base font-medium'}>
      {children}
    </label>
  );
};
