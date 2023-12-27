import st from "./index.module.css";
import Img from "../../components/Image";

import React from "react";

const SeriesBanner = () => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.leftCont}>
          <div className={st.fdiv}>
            <Img src="./Images/swissborgA/logo.png" />
            <span id={st.mainHead}>SwissBorg Series A</span>
          </div>
          <span id={st.para}>
            Thank you to our SwissBorg Series A investors! Your incredible
            participation resulted in record-breaking success!
          </span>
          <div className={st.dataCont}>
            <div className={st.dataCont1}>
              <span id={st.datanum}>21.27M</span>
              <span id={st.dataname}>Amount raised (CHF)*</span>
            </div>
            <div className={st.dataCont1}>
              <span id={st.datanum}>16,660</span>
              <span id={st.dataname}>Investors</span>
            </div>
            <div className={st.dataCont1}>
              <span id={st.datanum}>223.14M</span>
              <span id={st.dataname}>Current dynamic valuation</span>
            </div>
            <div className={st.dataCont1}>
              <span id={st.datanum}>1M+</span>
              <span id={st.dataname}>Registered app users</span>
            </div>
          </div>
          <span className={st.btmcont}>
            *Aggregated amount collected in the course of 3 concomitant offers
            to the public and a private sale
          </span>
        </div>
        <div className={st.rightCont}>
          <Img src="./Images/swissborgA/train.png" />
        </div>
      </div>
    </div>
  );
};

export default SeriesBanner;
