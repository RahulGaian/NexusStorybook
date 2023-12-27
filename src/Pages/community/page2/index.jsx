import React from "react";
import PerformanceMetrics from "../../../molecules/performanceMetrics";
import CardsEcosystem from "../../../molecules/cardsEcosystem";
import { cardsData } from "../../../molecules/cardsEcosystem/data";
import { notifyMeData } from "../../../molecules/notifyMe/data";
import NotifyMe from "../../../molecules/notifyMe";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";
import style from "./index.module.css";

function CommunityPage2() {
  return (
    <section>
      <section>
        <PerformanceMetrics />
      </section>
      <section>
        <CardsEcosystem data={cardsData.ecosystemCards} />
      </section>
      <section>
        <CardsEcosystem data={cardsData.borgBuyBack} />
      </section>
      <section>
        <NotifyMe
          data={notifyMeData.notifyMe}
          showMainText={true}
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

export default CommunityPage2;
