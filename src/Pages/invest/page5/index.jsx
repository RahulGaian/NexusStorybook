import React from "react";
import style from './index.module.css'
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import Yield from "../../../molecules/yield";
import { yieldData } from "../../../molecules/yield/yieldData";
import InfographicCard from "../../../molecules/infographicCard";
import { ifgData } from "../../../molecules/infographicCard/data";
import MobileAndText from "../../../molecules/mobileAndText";
import { mobileAndTextData } from "../../../molecules/mobileAndText/mobileAndTextData";
import DynamicAccordion from "../../../molecules/dynamicAccordian";
import { dynamicAccordianData } from "../../../molecules/dynamicAccordian/data";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer"

const Page5 = () => {
  return (
    <div>
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
        <Footer />
      </section>
    </div>
  );
};

export default Page5;
