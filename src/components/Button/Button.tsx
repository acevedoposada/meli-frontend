import React from 'react';
import clsx from 'clsx';

import { FC } from 'models/common';

import styles from './Button.module.scss';

const Button: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(styles['Button'], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
