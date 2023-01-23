import { Product } from 'models/product';

export interface ProductCardProps extends Product {
  seller?: string;
  link?: boolean;
  path?: string;
  linkState?: any;
}
