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

function Page2() {
  return (
    <section>
      <section>
        <HeadnImg data={headnImgData.Basket} />
      </section>
      <section>
        <SecondHeading data={secondHeadingData.chooseThematic} />
      </section>
      <section>
        <InfographicCard data={ifgData.c1} />
        <InfographicCard data={ifgData.c2} />
      </section>
      <section>
        <CaseStudy data={caseStudyData.caseStudy2} />
      </section>
      <section>
        <Thematics />
      </section>
      <section>
        <SecondHeading data={secondHeadingData.infographicTitle} />;
      </section>
      <section>
        <InfographicCard data={ifgData.c3} />
        <InfographicCard data={ifgData.c4} />
      </section>
      <section>
        <CaseStudy data={caseStudyData.caseStudy} />
      </section>
      <section>
        <Investment data={InvestmentData.investmentOne} />
      </section>
      <section>
        <DynamicAccordion data={dynamicAccordianData.dynamicAccordian1} />
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
