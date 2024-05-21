export type Product = {
  _id?: string;
  name: string;
  slug: string;
  image: string;
  banner?: string;
  description: string;
  size: string;
  price: number;
  category: string;
  inStock: boolean;
};
