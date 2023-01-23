export enum LoaderVariant {
  transparent = 'transparent',
  solid = 'solid',
}

export interface LoaderProps {
  open: boolean;
  variant?: `${LoaderVariant}`;
}
