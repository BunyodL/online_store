import axios from "axios";

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})

export const productsAPI = {
  async getAllProducts() {
    const response = await instance.get('products');
    return response;
  }
};

// https://education.github.com/pack