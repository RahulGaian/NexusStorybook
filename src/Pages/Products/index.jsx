import React, { useState, useEffect } from 'react';
import { productsData } from '../../constants/data';
import { useParams } from 'react-router-dom';
import Products from '../../templates/products/products';
import { useNavigate } from "react-router-dom";
const ProductsPage = () => {
  let { id } = useParams();
  let [content, setContent] = useState(productsData[0]);
  const navigate = useNavigate();


  useEffect(() => {
    console.log(id);
    let data = productsData.find((item) => item.id === id);

    if (data) {
      console.log(data);
      setContent(data);

    }
    else{
      navigate("/comingsoon")
    }
  }, [id]);

  return <Products datas={content} />;
};

export default ProductsPage;
