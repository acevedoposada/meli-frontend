export interface Currency {
  id: string;
  currency: string;
  amount: number;
  decimals: number;
}

export interface Product {
  id: string;
  title: string;
  price: Currency;
  picture: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
  sold_quantity?: number;
}
