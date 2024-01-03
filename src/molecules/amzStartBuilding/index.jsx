import React from "react";
import style from "./index.module.css";

function StartBuilding() {
  return (
    <div className={style.startConatiner}>
      <div className={style.startContentCont}>
        <div className={style.startTop}>
          <h1>Start building</h1>
          <p>
            With nearly a billion Alexa devices in the hands of customers, now
            is the time to bring your idea to the world.
          </p>
        </div>

        <div className={style.startBottomCont}>
          <div className={style.startBottom}>
            <h1>Alexa</h1>
            <div className={style.border}></div>
            <p>Connect with hundreds of millions of customers worldwide.</p>
          </div>
          <div className={style.startBottom}>
            <h1>AWS</h1>
            <div className={style.border}></div>
            <p>
              Develop with greater flexibility, scalability, and reliablity.
            </p>
          </div>
          <div className={style.startBottom}>
            <h1>Fire TV</h1>
            <div className={style.border}></div>
            <p>Build for over 200 million Fire TV devices worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartBuilding;
