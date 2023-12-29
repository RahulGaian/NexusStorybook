import React from "react";
import style from "./index.module.css";
import Img from "../../components/Image";

function AdvisoryBoard() {
  return (
    <div className={style.advisoryContainer}>
      <div className={style.advisoryContentCont}>
        <div className={style.advisoryTop}>
          <div className={style.advisoryTopImg}>
            <Img src="./Images/advisoryBoard/advisoryImg.png"></Img>
          </div>
          <div className={style.advisoryTopContent}>
            <h1>A global force with a proven track record</h1>
            <p>
              We started our journey with a team of 9 and a successful ICO in
              2018. We are now a team of more <br />
              <span>
                than 200 committed to create the bank of the future. Empowered
                by our diversity and passion, we will keep going for years to
                come.
              </span>
            </p>
          </div>
        </div>
        <div className={style.advisoryBottom}>
          <div className={style.advisoryBottomHeader}>
            <h1>Senior Advisors to the Board</h1>
          </div>
          <div className={style.advisoryBottomContentCont}>
            <div className={style.advisoryBottomContent}>
              <div className={style.advisoryBottomImg}>
                <Img src="./Images/advisoryBoard/profile.webp"></Img>
              </div>
              <div className={style.advisoryBottomName}>
                <h1>Lorem Ipsum </h1>
                <p>View profile </p>
              </div>
            </div>
            <div className={style.advisoryBottomContent}>
              <div className={style.advisoryBottomImg}>
                <Img src="./Images/advisoryBoard/profile.webp"></Img>
              </div>
              <div className={style.advisoryBottomName}>
                <h1>Lorem Ipsum</h1>
                <p>View profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvisoryBoard;
