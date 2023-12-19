import React from "react";
import style from "./index.module.css";

function Yield({ data }) {
  return (
    <div className={style.yield}>
      <div className={style.yieldContainer}>
        {data.map((item, index) => (
          <div key={index} className={style.yieldContentCont}>
            <div className={style.yieldImageCont}>
              <img src={item.logo} alt="" className={style.yieldImage} />
            </div>
            <div className={style.yieldNameCont}>
              <p className={style.yieldName}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Yield;
