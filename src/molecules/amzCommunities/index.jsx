import React from "react";
import Style from "./index.module.css";
import Img from "../../components/Image";
import { communitiesData } from "./data";

const Communities = () => {
  const communityKeys = Object.keys(communitiesData);

  return (
    <div className={Style.container}>
      {communityKeys.map((key) => {
        const community = communitiesData[key];

        return (
          <div key={key} className={Style.wrapper}>

            {community.map((item, index) => (
                
              <section key={index} className={Style.bottomContent}>
                <div className={Style.logo}>
                  <Img src={item.imagesrc} />   
                </div>

                <div className={Style.name_designation}>
                  <div>
                    <h1>{item.nameText}</h1>
                    <p>{item.texts}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Communities;
