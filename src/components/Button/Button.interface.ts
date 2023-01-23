export enum ButtonVariants {
  contained = 'contained',
  link = 'link',
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: `${ButtonVariants}`;
}
