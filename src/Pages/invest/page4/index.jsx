import React from "react";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import SecondHeading from "../../../molecules/secondHeading/secondHeading";
import { secondHeadingData } from "../../../molecules/secondHeading/data";
import Dynamic4Option from "../../../molecules/dynamic4Options";
import { dynamic4OptionData } from "../../../molecules/dynamic4Options/data";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";
import { notifyMeData } from "../../../molecules/notifyMe/data";
import NotifyMe from "../../../molecules/notifyMe";
import style from "./index.module.css";
import MoreFeatures from "../../../molecules/moreFeatures";
import { moreFeaturesData } from "../../../molecules/moreFeatures/data";
import InfographicCard from "../../../molecules/infographicCard";
import { ifgData } from "../../../molecules/infographicCard/data";
import CaseStudy from "../../../molecules/caseStudy";
import { caseStudyData } from "../../../molecules/caseStudy/data";
import Thematics from "../../../molecules/exploreThematics";
import Investment from "../../../molecules/investmentData";
import { InvestmentData } from "../../../molecules/investmentData/investmentData";
import DynamicAccordion from "../../../molecules/dynamicAccordian";
import { dynamicAccordianData } from "../../../molecules/dynamicAccordian/data";
import MobileAndText from "../../../molecules/mobileAndText";
import { mobileAndTextData } from "../../../molecules/mobileAndText/mobileAndTextData";
import EstimateEarning from "../../../molecules/estimateEarning";
import Blobs from "../../../molecules/blobs";

function Page2() {
  return (
    <section>
          <Blobs top={"-10%"} left={"-200px"}></Blobs>
      <Blobs top={"60%"}  color="yellow" left={"85%"}></Blobs>
      <Blobs top={"150%"} zIndex={1} left={"-200px"}></Blobs>
      <Blobs top={"200%"}  zIndex={1} color="yellow" left={"85%"}></Blobs>
      {/* <Blobs top={"450%"} left={"-200px"}></Blobs> */}
      {/* <Blobs top={"480%"}  color="yellow" left={"85%"}></Blobs> */}
      <section>
        <HeadnImg data={headnImgData.accountAnalysis} />
      </section>
      <section>
        <SecondHeading data={secondHeadingData.investmentStatistics} />
      </section>
      <section>
        {/* <Dynamic4Option/> */}
        <Dynamic4Option data={dynamic4OptionData.d4Cmp1} />
      </section>
      <section>
        <NotifyMe
          data={notifyMeData.notifyMe3}
          showMainText={true}
          showSecondaryText={false}
          showButton={false}
          showImageContainer={true}
        />
      </section>
      {/* <section>
        <EstimateEarning {...args}/>
      </section> */}
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

export default Page2;
