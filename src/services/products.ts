import axios from 'axios';
import { IGetProductsResponse } from '../models';

const isProduction = false;

export const getProducts = async () => {
  let response: IGetProductsResponse;

  if (isProduction) {
    response = await axios.get(
      'https://react-shopping-cart-67954.firebaseio.com/products.json'
    );
  } else {
    response = await import('../static/json/products.json');
  }

  const { products } = response.data || [];

  return products;
};
