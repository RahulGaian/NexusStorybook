import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { platformData } from "../../constants/data";
import PlatformIndex from "../../templates/platform/platfromIndex";
import { useNavigate } from "react-router-dom";

const PlatformPage = () => {
  let { id } = useParams();
  let [content, setContent] = useState(platformData[0]);
  const navigate = useNavigate();


  useEffect(() => {
    console.log(id);
    let data = platformData.find((item) => item.id === id);

    if (data) {
      console.log(data);
      setContent(data);
    }
    else{
      navigate("/comingsoon")
    }
  }, [id]);

  return (
    <section
      style={{ width: "100vw", position: "relative", overflowX: "hidden" }}
    >
      <PlatformIndex platform={content} />;
    </section>
  );
};

export default PlatformPage;
