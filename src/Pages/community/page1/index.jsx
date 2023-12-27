import React from "react";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import SecondHeading from "../../../molecules/secondHeading/secondHeading";
import { secondHeadingData } from "../../../molecules/secondHeading/data";
import Dynamic4Option from "../../../molecules/dynamic4Options";
import { dynamic4OptionData } from "../../../molecules/dynamic4Options/data";
import CaseStudy2 from "../../../molecules/caseStudy2";
import { caseStudy2Data } from "../../../molecules/caseStudy2/data";
import InfographicCard from "../../../molecules/infographicCard";
import { ifgData } from "../../../molecules/infographicCard/data";
import GetStarted from "../../../molecules/getStarted";
import { getStartedData } from "../../../molecules/getStarted/data";
import MobileAndText from "../../../molecules/mobileAndText";
import { mobileAndTextData } from "../../../molecules/mobileAndText/mobileAndTextData";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";
import style from "./index.module.css";

function CommunityPage1() {
  return (
    <section>
      <section>
        <HeadnImg data={headnImgData.borg} />
      </section>

      <section>
        <SecondHeading data={secondHeadingData.rockSolid} />
      </section>
      <section>
        <Dynamic4Option data={dynamic4OptionData.d4Cmp6} />
      </section>
      <section>
        <CaseStudy2 data={caseStudy2Data.c1} />
      </section>
      <section>
        <InfographicCard data={ifgData.c10} />;
      </section>
      <section>
        <CaseStudy2 data={caseStudy2Data.c2} />
      </section>
      <section>
        <CaseStudy2 data={caseStudy2Data.c3} />
      </section>
      <section>
        <CaseStudy2 data={caseStudy2Data.c4} />
      </section>
      <section>
        <GetStarted data={getStartedData.readBlog} />;
      </section>
      <section>
        <section className={style.mobileAndText}>
          <MobileAndText data={mobileAndTextData.mobileData2.mobileText2} />
        </section>
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

export default CommunityPage1;
