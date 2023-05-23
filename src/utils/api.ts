import axios from 'axios';

interface Params {
  gender?: string,
  category?: string,
  subcategory?: string,
  id?: string,
}

export const getProductCategories = async () => {
  const response = await axios.get('/api/category');
  return response.data;
}

export const getProductById = async (params: Params) => {
  console.log();
  const response = await axios.get(`/api/products/${params.gender}/${params.category}/${params.subcategory}/${params.id}`);
  return response.data;
}

export const getProducts = async () => {
  console.log();
  const response = await axios.get('/api/products');
  return response.data;
}

export const getProductsByGender = async (params: any) => {
  const response = await axios.get(`/api/products/${params.gender}`);
  return response.data;
}

export const getProductsByCategory = async (params: any) => {
  const response = await axios.get(`/api/products/${params.gender}/${params.category}`);
  return response.data;
}

export const getProductsBySubcategory = async (params: any) => {
  const response = await axios.get(`/api/products/${params.gender}/${params.category}/${params.subcategory}`);
  return response.data;
}