import React from "react";
import st from "./index.module.css";
import HeadnImg from "../../../molecules/startHeadnImg";
import { headnImgData } from "../../../molecules/startHeadnImg/data";
import CaseStudy2 from "../../../molecules/caseStudy2";
import { caseStudy2Data } from "../../../molecules/caseStudy2/data";
import InputCredential from "../../../molecules/inputCredentails";
import GetStarted from "../../../molecules/getStarted";
import { getStartedData } from "../../../molecules/getStarted/data";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";
import Blobs from "../../../molecules/blobs";

function CommunityPage7() {
  return (
    <section
      style={{ width: "100vw", overflowX: "hidden", position: "relative" }}
    >
      <Blobs top={"-50px"} left={"-250px"}></Blobs>
      <Blobs top={"300px"} color="yellow" left={"82%"}></Blobs>
      <section>
        <HeadnImg data={headnImgData.secure} />
      </section>
      <section>
        <CaseStudy2 data={caseStudy2Data.c3} />
      </section>
      <section className={st.input}>
        <InputCredential />
      </section>
      <section>
        <GetStarted data={getStartedData.auditList} />
      </section>
      <section className={st.cookies}>
        <Cookies />
      </section>
      <section className={st.newsletter}>
        <Newsletter />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}

export default CommunityPage7;
