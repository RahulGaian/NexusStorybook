import React from "react";
import style from "./index.module.css";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import SecondHeading from "../../../molecules/secondHeading/secondHeading";
import { secondHeadingData } from "../../../molecules/secondHeading/data";
import { notifyMeData } from "../../../molecules/notifyMe/data";
import NotifyMe from "../../../molecules/notifyMe";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import MoreFeatures from "../../../molecules/moreFeatures";
import { moreFeaturesData } from "../../../molecules/moreFeatures/data";
import Footer from "../../../molecules/footer";

const Page7 = () => {
  return (
    <div>
      <section>
        <HeadnImg data={headnImgData.smartInvestment} />
      </section>

      <section>
        <SecondHeading data={secondHeadingData.advancedCrypto} />
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
    </div>
  );
};

export default Page7;
