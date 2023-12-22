import React from "react";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import SecondHeading from "../../../molecules/secondHeading/secondHeading";
import { secondHeadingData } from "../../../molecules/secondHeading/data";
import GetStarted from "../../../molecules/getStarted";
import { getStartedData } from "../../../molecules/getStarted/data";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";
import { notifyMeData } from "../../../molecules/notifyMe/data";
import NotifyMe from "../../../molecules/notifyMe";
import DynamicSlider from "../../../molecules/dynamicSlider/index";
import style from "./index.module.css";
import MoreFeatures from "../../../molecules/moreFeatures";
import { moreFeaturesData } from "../../../molecules/moreFeatures/data";

function Page1() {
  return (
    <section>
      <section>
        <HeadnImg data={headnImgData.fiatCrypto} />
      </section>
      <section>
        <SecondHeading data={secondHeadingData.secondHeading} />
      </section>
      <section>
        <DynamicSlider />
      </section>
      <section>
        <NotifyMe
          data={notifyMeData.notifyMe2}
          showMainText={true}
          showSecondaryText={true}
          showButton={true}
          showImageContainer={false}
        />
      </section>
      <section>
        <GetStarted data={getStartedData.getStarted} />
      </section>
      <section>
        <MoreFeatures data={moreFeaturesData.moreFeatures} />
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

export default Page1;
