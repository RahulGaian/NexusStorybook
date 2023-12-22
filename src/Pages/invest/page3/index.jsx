import React from "react";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import MobileAndText from "../../../molecules/mobileAndText";
import { mobileAndTextData } from "../../../molecules/mobileAndText/mobileAndTextData";
import GetStarted from "../../../molecules/getStarted";
import { getStartedData } from "../../../molecules/getStarted/data";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";
import style from "./index.module.css";

function Page3() {
  return (
    <section>
      <section>
        <HeadnImg data={headnImgData.appAssets} />
      </section>
      <section className={style.mobileAndText}>
        <MobileAndText data={mobileAndTextData.mobileData2.mobileText2} />
      </section>
      <section>
        <GetStarted data={getStartedData.swissBorg} />;
      </section>
      <section className={style.cookies}>
        <Cookies />
      </section>
      <section className={style.newsletter}>
        <Newsletter />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}

export default Page3;
