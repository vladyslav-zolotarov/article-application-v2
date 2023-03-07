import React, { forwardRef } from 'react';

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <label
        ref={ref}
        {...props}
        className={'test text-base font-medium'}>
        {children}
      </label>
    );
  }
);
