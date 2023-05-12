import axios from 'axios';

export const getMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Hello!"})
    }, 500)
  })
};

export const getProductCategories = async () => {
  const response = await axios.get('/api/category');
  return response.data;
}