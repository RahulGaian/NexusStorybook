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

            <div className={styles.card}>
              <div>
                <Img src={"./Images/moreFeatures/moreFeaturesA.svg"}></Img>
              </div>
              <div>
                <p>BORG TOKEN</p>
              </div>
            </div>

            <div className={styles.card}>
              <div>
                <Img src={"./Images/moreFeatures/moreFeaturesB.svg"}></Img>
              </div>
              <div>
                <p>SwissBorg Earn</p>
              </div>
            </div>

            <div className={styles.card}>
              <div>
                <Img src={"./Images/moreFeatures/moreFeaturesC.png"}></Img>
              </div>
              <div>
                <p>Supported Assets</p>
              </div>
            </div>

            <div className={styles.card}>
              <div>
                <Img src={"./Images/moreFeatures/moreFeaturesD.png"}></Img>
              </div>
              <div>
                <p>Rewards Program</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeatures;
