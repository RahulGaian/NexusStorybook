import React from "react";
import style from "./index.module.css";
import Img from "../../components/Image";

function ViewProject() {
  return (
    <div className={style.viewContainer}>
      <div className={style.viewContentContainer}>
        <div className={style.viewContent}>
          <div className={style.viewLeft}>
            <Img src="./Images/viewProject/swissBorg.png"></Img>
          </div>
          <div className={style.viewCenter}>
            <div className={style.viewCenterName}>
              <h1>SwissBorg Series A</h1>
              <p>From token holder to community member.</p>
              <p>From community member to business partner.</p>
            </div>
            <div className={style.viewCenterBtn}>
              <button>Ended March 31, 2023</button>
              <button>View project</button>
            </div>
          </div>
          <div className={style.viewRight}>
            <Img src="./Images/viewProject/robo.png"></Img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProject;
