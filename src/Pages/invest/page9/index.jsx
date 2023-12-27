import React from "react";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import SecondHeading from "../../../molecules/secondHeading/secondHeading";
import { secondHeadingData } from "../../../molecules/secondHeading/data";
import Dynamic4Option from "../../../molecules/dynamic4Options";
import { dynamic4OptionData } from "../../../molecules/dynamic4Options/data";
import GetStarted from "../../../molecules/getStarted";
import { getStartedData } from "../../../molecules/getStarted/data";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";
import { yieldData } from "../../../molecules/yield/yieldData";
import Yield from "../../../molecules/yield";
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
import CurveContainer from "../../../molecules/curveBgContainer";
import { curveContainerData } from "../../../molecules/curveBgContainer/data";

function Page9() {
  return (
    <section>
      <section>
        <HeadnImg data={headnImgData.autoInvest} />
      </section>
      <section>
        <Yield data={yieldData.yield3} />
      </section>
      <section>
        <InfographicCard data={ifgData.c8} />
      </section>
      <section>
        <SecondHeading data={secondHeadingData.autoInvest} />
      </section>
      <section>
        <Dynamic4Option data={dynamic4OptionData.d4Cmp5} />
      </section>
      <section>
        <InfographicCard data={ifgData.c7} />
      </section>
      <section>
        <DynamicAccordion data={dynamicAccordianData.dynamicAccordian1} />
      </section>
      <section className={style.mobileAndText}>
        <MobileAndText data={mobileAndTextData.mobileData4.mobileText4} />
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

export default Page9;
