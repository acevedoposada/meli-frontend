import clsx from 'clsx';

import { FC } from 'models/common';

import { ButtonProps } from './Button.interface';
import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'contained',
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles['Button'],
        styles[`Button--${variant}`],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
