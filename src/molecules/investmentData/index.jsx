import React from "react";
import style from "./index.module.css";

function Investment({ data }) {
  return (
    <div className={style.invest}>
      <div className={style.investContainer}>
        {data.map((investment, index) => (
          <div key={index} className={style.investContentCont}>
            <p className={style.investNumber}>{investment.investors}</p>
            <p className={style.investName}>{investment.investorsName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Investment;
