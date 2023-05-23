export interface UserProfile {
  first_name: string | null,
  last_name: string | null,
  email: string | null,
  birthday: string | null,
  loyalty_acct: number | null
}
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface RegisterFormValues {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirm_password: string
}

export interface LoginFormValues {
  email: string,
  password: string
}

export type Category = {
  subcategory_id: number;
  sub_name: string;
  category_id: number;
  gender: string;
  cat_name: string;
  slug: string
}

export type CategoryEnum = 'shoes' | 'bottoms' | 'tops' | 'accessories';

export type Gender = Record<string, Category[]>

export type ProductData = Record<string, Gender>;

export type Product = {
  product_id: number,
  description: string,
  name: string, 
  gender: string,
  price: string,
  brand: string,
  subcategory_id: number,
  url: string
  cat_name: string,
  slug: string
}

export type Products = Array<Product>;

export type Item = {
  item_id: number,
  product_id: number,
  size: string,
  number_in_stock: number,
  color: string
}

export type ProductById = Product & {
  items?: Array<Item>
}