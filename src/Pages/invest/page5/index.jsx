import React from "react";
import style from './index.module.css'
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import Yield from "../../../molecules/yield";
import { yieldData } from "../../../molecules/yield/yieldData";
import InfographicCard from "../../../molecules/infographicCard";
import { ifgData } from "../../../molecules/infographicCard/data";
import Investment from "../../../molecules/investmentData";
import { InvestmentData } from "../../../molecules/investmentData/investmentData";
import MobileAndText from "../../../molecules/mobileAndText";
import { mobileAndTextData } from "../../../molecules/mobileAndText/mobileAndTextData";
import DynamicAccordion from "../../../molecules/dynamicAccordian";
import { dynamicAccordianData } from "../../../molecules/dynamicAccordian/data";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer"
import Blobs from "../../../molecules/blobs";
const Page5 = () => {
  return (
    <section>
      <Blobs top={"-10%"} left={"-200px"}></Blobs>
      <Blobs top={"60%"}  color="yellow" left={"85%"}></Blobs>
      <Blobs top={"150%"} zIndex={1} left={"-200px"}></Blobs>
      <Blobs top={"200%"}  zIndex={1} color="yellow" left={"85%"}></Blobs>
      <section>
        <HeadnImg data={headnImgData.swissBorgEarn} />
      </section>

      <section>
        <Yield data={yieldData.yield1} />
      </section>

      <section>
        <InfographicCard data={ifgData.c5} />
      </section>

      <section>
        <InfographicCard data={ifgData.c6} />
      </section>

      <section>
        <Investment data={InvestmentData.investmentTwo} />
      </section>

      <section>
        <MobileAndText data={mobileAndTextData.mobileData3.mobileText3} />
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
        {/* <Footer /> */}
      </section>
    </section>
  );
};

export default Page5;
