import React from "react";
import style from "./index.module.css";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import SecondHeading from "../../../molecules/secondHeading/secondHeading";
import { secondHeadingData } from "../../../molecules/secondHeading/data";
import Dynamic4Option from "../../../molecules/dynamic4Options";
import { dynamic4OptionData } from "../../../molecules/dynamic4Options/data";
import AnalysisExcerpt from "../../../molecules/analysisExcerpt";
import { notifyMeData } from "../../../molecules/notifyMe/data";
import NotifyMe from "../../../molecules/notifyMe";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import MoreFeatures from "../../../molecules/moreFeatures";
import { moreFeaturesData } from "../../../molecules/moreFeatures/data";
import Footer from "../../../molecules/footer";
import Blobs from "../../../molecules/blobs";
const Page7 = () => {
  return (
    <section>
           <Blobs top={"-10%"} left={"-200px"}></Blobs>
      <Blobs top={"60%"}  color="yellow" left={"85%"}></Blobs>
      <Blobs top={"150%"} zIndex={1} left={"-200px"}></Blobs>
      <Blobs top={"200%"}  zIndex={-1} color="yellow" left={"85%"}></Blobs>
      <section>
        <HeadnImg data={headnImgData.smartInvestment} />
      </section>

      <section>
        <SecondHeading data={secondHeadingData.advancedCrypto} />
      </section>

      <section>
      <Dynamic4Option data={dynamic4OptionData.d4Cmp3} />
      </section>

      <section>
        <AnalysisExcerpt/>
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
        {/* <Footer /> */}
      </section>
    </section>
  );
};

export default Page7;
