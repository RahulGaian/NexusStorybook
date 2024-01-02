import React from "react";
import style from "./index.module.css";
import LaunchpadBanner1 from "../../../molecules/launchpadBanner1";
import ViewProject from "../../../molecules/viewProject";
import CardsHead from "../../../molecules/launchPadcardsHead";
import { cardHeadData } from "../../../molecules/launchPadcardsHead/data";
import YTVideo from "../../../molecules/ytVideo";


const LaunchpadPage1 = () => {
  return (
    <section>
      <section>
        <LaunchpadBanner1 />
      </section>

      <section>
        <ViewProject />;
      </section>

      <section className={style.container}>
        <div className={style.contentContainer}>
          <p className={style.mainCont}>
            Watch this space, more investment opportunities coming soon!
          </p>
        </div>
      </section>

      <section>
        <CardsHead data={cardHeadData.head3} />
      </section>

      <section>
        <YTVideo />
      </section>
    </section>
  );
};

export default LaunchpadPage1;
