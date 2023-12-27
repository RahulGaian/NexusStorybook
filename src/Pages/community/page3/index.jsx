import React from "react";
import st from "./index.module.css";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import InfographicCard from "../../../molecules/infographicCard";
import { ifgData } from "../../../molecules/infographicCard/data";
import CurveContainer from "../../../molecules/curveBgContainer";
import { curveContainerData } from "../../../molecules/curveBgContainer/data";
import MobileAndText from "../../../molecules/mobileAndText";
import { mobileAndTextData } from "../../../molecules/mobileAndText/mobileAndTextData";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";

function CommunityPage3() {
  return (
    <section>
      <section>
        <HeadnImg data={headnImgData.zeroFees} />
      </section>
      <section>
        <InfographicCard data={ifgData.c11} />
        <InfographicCard data={ifgData.c12} />
      </section>
      <section>
        <CurveContainer data={curveContainerData.curveContainer2} />
      </section>
      <section className={st.mobileAndText}>
        <MobileAndText data={mobileAndTextData.mobileData4.mobileText4} />
      </section>
      <section className={st.cookies}>
        <Cookies/>
      </section>
      <section className={st.newsletter}>
        <Newsletter/>
      </section>
      <section>
        <Footer/>
      </section>
    </section>
  );
}

export default CommunityPage3;
