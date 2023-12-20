import React from "react";
import style from "./index.module.css";

function MobileAndText({ data }) {
  const { heading, description, images } = data;

  return (
    <div className={style.mobileContainer}>
      <div className={style.mobileContentContainer}>
        <div className={style.mobileContentLeft}>
          <div className={style.mobileLeftHeader}>
            <p>{heading}</p>
          </div>
          <div className={style.mobileLeftDesc}>
            {Object.values(description).map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <div className={style.mobileLeftImage}>
            {Object.values(images).map((image, index) => (
              <img key={index} src={image} alt="" />
            ))}
          </div>
        </div>
        {/* Assuming mobImg is directly in the data object */}
        <div className={style.mobileContentRight}>
          <img src={data.mobImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MobileAndText;
