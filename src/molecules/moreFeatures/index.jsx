import React from "react";
import styles from "./index.module.css";
import Img from "../../components/Image";

const MoreFeatures = ({ data }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <h1>{data.title}</h1>
          </div>
        </div>

        <div className={styles.cardContainerMain}>
          <div className={styles.cardContainer}>

            {
            data.cards.map((card, index) => (
              <div className={styles.card} key={index}>
                <div>
                  <Img src={card.imgSrc}></Img>
                </div>
                <div>
                  <p>{card.text}</p>
                </div> 
              </div>
            ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;

