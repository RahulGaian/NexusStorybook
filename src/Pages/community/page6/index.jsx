import React from "react";
import st from "./index.module.css";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import InfographicCard from "../../../molecules/infographicCard";
import { ifgData } from "../../../molecules/infographicCard/data";
import MobileAndText from "../../../molecules/mobileAndText";
import { mobileAndTextData } from "../../../molecules/mobileAndText/mobileAndTextData";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";

function CommunityPage6() {
  return (
    <section>
      <section>
        <HeadnImg data={headnImgData.unlock} />
      </section>
      <section>
        <InfographicCard data={ifgData.c13} />
        <InfographicCard data={ifgData.c14} />
      </section>
      <section className={st.mobileAndText}>
        <MobileAndText data={mobileAndTextData.mobileData2.mobileText2} />
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

export default CommunityPage6;
