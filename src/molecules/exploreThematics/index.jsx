import React from "react";
import style from "./index.module.css";
import { exploreThematicsData } from "./exploreData";

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
          {Object.entries(exploreThematicsData).map(([key, thematic]) => (
            <div
              key={key}
              className={style.thematicsFooter}
              style={{ background: thematic.backgroundColor }}
            >
              <div className={style.thematicsBg}>
                {thematic.backgroundImage && (
                  <img
                    src={thematic.backgroundImage}
                    alt="thematicbackgroundimage"
                    className={style.thematicsImg}
                  />
                )}
              </div>
              <div className={style.thematicsLogo}>
                <img src={thematic.logo} alt="thematiclogo" />
              </div>
              <h3 className={style.thematicsName}>{thematic.name}</h3>
              <p className={style.thematicsDesc}>{thematic.desc}</p>
              {thematic.icons ? (
                <div className={style.thematicsIconContainer}>
                  <img
                    src={thematic.icons}
                    alt="thematicicon"
                    className={style.thematicsIcon}
                  />
                  <p className={style.thematicsCoins}>{thematic.coins}</p>
                </div>
              ) : (
                ""
              )}
              <div className={style.thematicsBtnCont}>
                <p className={style.thematicsBtn}>{thematic.btns}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Thematics;
