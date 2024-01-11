import React from "react";
import style from "./index.module.css";

function StartBuilding() {
  return (
    <div className={style.startConatiner}>
      <div className={style.startContentCont}>
        <div className={style.startTop}>
          <h1>Start building</h1>
          <p>
            With dozens of Intelligent apps in the hands of customers, now is
            the time to leapfrog the value of your business.
          </p>
        </div>

        <div className={style.startBottomCont}>
          <div className={style.startBottom}>
            <h1>Aegis</h1>
            <p>Connect with hundreds of millions of customers worldwide.</p>
          </div>
          <div className={style.startBottom}>
            <h1>iZak</h1>
            <p>Connect with hundreds of millions of customers worldwide.</p>
          </div>
          <div className={style.startBottom}>
            <h1>Museo</h1>
            <p>Connect with hundreds of millions of customers worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartBuilding;
