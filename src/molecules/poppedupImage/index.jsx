import React from "react";
import style from "./index.module.css";
import Img from "../../components/Image";

function PoppedupImage() {
  return (
    <div className={style.poppedContainer}>
      <div className={style.poppedContentCont}>
        <div className={style.poppedLeft}>
          <h1>Build the future of wealth with us</h1>
          <p>
            We are shaping the future of investment - placing the power back in
            the hands of individuals.
          </p>
        </div>
        <div className={style.poppedRight}>
          <Img src="/Images/poppedupImage/robo.png"></Img>
        </div>
      </div>
    </div>
  );
}

export default PoppedupImage;
