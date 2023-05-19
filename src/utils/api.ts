import axios from 'axios';

export const getProductCategories = async () => {
  const response = await axios.get('/api/category');
  return response.data;
}

export const getProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data;
}