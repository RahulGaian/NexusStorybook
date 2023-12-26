import React from "react";
import styles from "./index.module.css";
import Img from "../../components/Image";

const CaseStudy = ({ data }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div
            className={styles.mainCont}
            style={{ flexDirection: data.flexDirection }}
          >
            <div className={styles.leftContent}>
              <Img src={data.imgURL} />
            </div>

            <div className={styles.rightContent}>
              <h1 className={styles.heading}>{data.heading}</h1>
              <p className={styles.para}>{data.para}</p>
              <button
                className={styles.btn}
                style={{
                  borderRadius: data.borderRad,
                  backgroundColor: data.btn_bgColor,
                  color: data.btn_txt_color,
                  botder: data.btn_border,
                }}
              >
                {data.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
