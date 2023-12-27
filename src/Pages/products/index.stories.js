import React from 'react';
// import PlatfromIndex from './platfromIndex';
import Products from './products';
import { productsData } from '../../constants/data';
export default {
  title: "pages/products",
  component: Products,
};

export const product = () => (
  <Products   datas={productsData[1]}/>
);
