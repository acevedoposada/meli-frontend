import React from 'react';

export interface InputSearchProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  buttonProps?: Partial<HTMLButtonElement>;
}
