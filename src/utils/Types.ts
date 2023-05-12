
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

export type Category = {
  subcategory_id: number;
  sub_name: string;
  category_id: number;
  gender: string;
  name: string;
}

export type Gender = {
  shoes: Category[];
  bottoms: Category[];
  tops: Category[];
  accessories?: Category[];
}

export type ProductData = Record<'women' | 'men' | 'unisex', Gender>;