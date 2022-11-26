export interface Product {
  count: number;
  description: string;
  id: string;
  price: number;
  title: string;
}
export type AddProductBody = {
  count: Product["count"];
  description: Product["description"];
  price: Product["price"];
  title: Product["title"];
};

export type Products = Product[];

export type Body404Type = {
  message: string;
};
