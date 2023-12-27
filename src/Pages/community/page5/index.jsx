import React from "react";
import InviteFriends from "../../../molecules/inviteFriends/index";
import ThreeInfographic from "../../../molecules/ThreePointInfographic";
import MoreFeatures from "../../../molecules/moreFeatures";
import { moreFeaturesData } from "../../../molecules/moreFeatures/data";
import { notifyMeData } from "../../../molecules/notifyMe/data";
import NotifyMe from "../../../molecules/notifyMe";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";
import style from "./index.module.css";
import Blobs from "../../../molecules/blobs";

function CommunityPage5() {
  return (
    <section style={{width:"100vw", overflowX: "hidden", position:"relative"}}>
      <Blobs top={"-50px"} left={"-250px"}></Blobs>
      <Blobs top={"300px"} color="yellow" left={"82%"}></Blobs>
      <section>
        <InviteFriends />
      </section>
      <section>
        <ThreeInfographic />
      </section>
      <section>
        <MoreFeatures data={moreFeaturesData.moreFeatures} />
      </section>
      <section>
        <NotifyMe
          data={notifyMeData.notifyMe4}
          showMainText={true}
          showMainPara={true}
          showSecondaryText={true}
          showButton={true}
          showImageContainer={false}
        />
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

export default CommunityPage5;
