import React, { useState, useEffect } from 'react';
import SolutionPageIndex from '../../templates/SolutionPages/SolutionPageIndex';
import { solutionData } from '../../constants/data';
import { useParams } from 'react-router-dom';

const SolutionPage = () => {
  let { id } = useParams();
  let [content, setContent] = useState(solutionData[0]);

  useEffect(() => {
    console.log(id);
    let data = solutionData.find((item) => item.id === id);

    if (data) {
      console.log(data);
      setContent(data);
    }
  }, [id]);

  return <SolutionPageIndex solution={content} />;
};

export default SolutionPage;
