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
import Dynamic4Option from "../../../molecules/dynamic4Options";
import { dynamic4OptionData } from "../../../molecules/dynamic4Options/data";
import style from "./index.module.css";
import MoreFeatures from "../../../molecules/moreFeatures";
import { moreFeaturesData } from "../../../molecules/moreFeatures/data";
import Blobs from "../../../molecules/blobs";

function Page1() {
  return (
    <section>
      <Blobs top={"-10%"} left={"-200px"}></Blobs>
      <Blobs top={"60%"}  color="yellow" left={"85%"}></Blobs>
      <section>
        <HeadnImg data={headnImgData.fiatCrypto} />
      </section>
      <section>
        <SecondHeading data={secondHeadingData.secondHeading} />
      </section>
      <section>
        {/* <Dynamic4Option/> */}
        <Dynamic4Option data={dynamic4OptionData.d4Cmp1} />
      </section>
      <section>
        <NotifyMe
          data={notifyMeData.notifyMe}
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
