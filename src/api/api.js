import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

export const productsAPI = {
  async getAllProducts() {
    const response = await instance.get('products');
    return response;
  },
  async getCurrentProduct(productId) {
    const response = await instance.get(`products/${productId}`);
    return response;
  },
};

export const authAPI = {
  async login(username, password) {
    const response = await instance.post('auth/login', { username, password });
    return response;
  },
};

// https://education.github.com/pack
