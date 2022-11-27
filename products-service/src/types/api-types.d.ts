export interface Product {
  count: number;
  description: string;
  id: string;
  price: number;
  title: string;
}
export type AddProductBody = {
  count: number;
  description: string;
  price: number;
  title: string;
};

export type Products = Product[];

export type Body404Type = {
  message: string;
};
