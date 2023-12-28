import React, { useState, useEffect } from 'react';
import { productsData } from '../../constants/data';
import { useParams } from 'react-router-dom';
import Products from '../../templates/products/products';
const ProductsPage = () => {
  let { id } = useParams();
  let [content, setContent] = useState(productsData[0]);

  useEffect(() => {
    console.log(id);
    let data = productsData.find((item) => item.id === id);

    if (data) {
      console.log(data);
      setContent(data);
    }
  }, [id]);

  return <Products datas={content} />;
};

export default ProductsPage;
