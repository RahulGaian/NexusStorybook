import React from "react";
import style from "./index.module.css";
import Img from "../../components/Image";
import { executiveData } from "./executiveData";

function ExecutiveTeam() {
  return (
    <div className={style.executiveContainer}>
      <div className={style.executiveContentConatiner}>
        <div className={style.executiveHeader}>
          <h1>Meet the Executive Team</h1>
        </div>
        <div className={style.executiveDetailsCont}>
          {Object.keys(executiveData).map((key) => {
            const { img, name, role } = executiveData[key];
            return (
              <div key={key} className={style.executiveDetails}>
                <Img src={img} alt={name} />
                <div className={style.executiveName}>
                  <h6>{name}</h6>
                  <p>{role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Mobile View */}
      <div className={style.mobileExecutiveCont}>
        <h1>Meet the Executive Team</h1>
        <div className={style.mobileExecutiveDetailsCont}>
          {Object.keys(executiveData).map((key) => {
            const { img, name, role, arrow } = executiveData[key];
            return (
              <div key={key} className={style.mobileExecutiveDetails}>
                <div className={style.mobileRightCont}>
                  <Img src={img} className={style.mobilePersonImg}></Img>
                  <div className={style.mobileExecutiveName}>
                    <h6>{name}</h6>
                    <p>{role}</p>
                  </div>
                </div>
                <div className={style.mobileArrowImg}>
                  <Img src={arrow}></Img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExecutiveTeam;
