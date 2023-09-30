import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

export const productsAPI = {
  async getAllProducts() {
    return await instance.get('products');
  },
  async getCurrentProduct(productId) {
    return await instance.get(`products/${productId}`);
  },
};

export const authAPI = {
  async login(username, password) {
    return await instance.post('auth/login', { username, password });
  },
};

// https://education.github.com/pack
