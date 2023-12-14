import React from "react";
import style from "./index.module.css";

function Thematics() {
  return (
    <div className={style.thematics}>
      <div className={style.thematicsContainer}>
        <div className={style.thematicsHeader}>
          <h1>Explore our Thematics</h1>
          <p>
            Our expertly curated Themes to turn your beliefs into strong
            investments.
          </p>
        </div>
        <div className={style.thematicsFooterContainer}>
          <div className={style.thematicsFooter}>
            <div className={style.thematicsBg}>
              <img src="./Images/exploreThematics/bg1.png" alt="" />
            </div>
            <div className={style.thematicsLogo}>
              <img
                src="./Images/exploreThematics/thematics-logo-1.png"
                alt=""
              />
            </div>
            <h3 className={style.thematicsName}>Golden</h3>
            <p className={style.thematicsDesc}>
              Discover how to navigate the market cycles confidently with our
              algorithm-driven blend of Bitcoin & Gold.
            </p>
            <div className={style.thematicsIconContainer}>
              <img
                src="./Images/exploreThematics/small-icons-1.png"
                alt=""
                className={style.thematicsIcon}
              />
              <p className={style.thematicsCoins}>2 coins</p>
            </div>
            <button className={style.thematicsBtn}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thematics;
