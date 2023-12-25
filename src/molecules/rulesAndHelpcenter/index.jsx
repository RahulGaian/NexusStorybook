import React from "react";
import style from "./index.module.css";

function RulesAndHelpcenter() {
  return (
    <div className={style.rulesContainer}>
      <div className={style.rulesContentCont}>
        <div className={style.rulesLeft}>
          <p>Rules & rewards</p>
          <p>For general rules and inquiries</p>
          <p>Learn more</p>
        </div>
        <div className={style.rulesRight}>
          <p>Help centre</p>
          <p>
            For technical details and product support, visit our help centre
          </p>
          <p>Go to help centre</p>
        </div>
      </div>
    </div>
  );
}

export default RulesAndHelpcenter;
