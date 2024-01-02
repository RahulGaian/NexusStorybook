import style from "./index.module.css";
import React from "react";
import SeriesBanner from "../../../molecules/seriesBanner";

import AccordianFaq from "../../../molecules/accordianFaq";
import { accordianData } from "../../../molecules/accordianFaq/accordianData";
import Dynamic4Video from "../../../molecules/dynamic4Video";
import { dynamic4VideoData } from "../../../molecules/dynamic4Video/data";
import Investment from "../../../molecules/investmentData";
import { InvestmentData } from "../../../molecules/investmentData/investmentData";
import TextImageVert from "../../../molecules/textImageVert";
import SecondHeading from "../../../molecules/secondHeading/secondHeading";
import { secondHeadingData } from "../../../molecules/secondHeading/data";
import InfographicCard from "../../../molecules/infographicCard";
import { ifgData } from "../../../molecules/infographicCard/data";
import ExecutiveTeam from "../../../molecules/executiveTeam";
import AdvisoryBoard from "../../../molecules/advisoryBoard";
import Carousel from "../../../molecules/dynamicSlider/index";
import MostReadArticles from "../../../molecules/mostReadArticles";
import { articlesData } from "../../../molecules/mostReadArticles/data";
import PoppedupImage from "../../../molecules/poppedupImage";
import Cookies from "../../../molecules/cookies";
import Newsletter from "../../../molecules/newsletter";
import Footer from "../../../molecules/footer";
import CardsHead from "../../../molecules/launchPadcardsHead/index";
import { cardHeadData } from "../../../molecules/launchPadcardsHead/data";
import LaunchpadHeader from "../../../molecules/launchpadHeader/index";

const LaunchpadPage2 = () => {
  return (
    <section>
      <section>
        <SeriesBanner />
      </section>

      <section className={style.dynamic}>
        <Dynamic4Video data={dynamic4VideoData.d4Cmp1} />
      </section>

      <section>
        <Investment data={InvestmentData.investmentFour} />
      </section>
      <section className={style.textImage}>
        <TextImageVert />
      </section>

      <section>
        <AccordianFaq data={accordianData.accordianFaq} />
      </section>
      <section>
        <CardsHead data={cardHeadData.head1} />
        <InfographicCard data={ifgData.c15} />;
        <InfographicCard data={ifgData.c16} />;
        <InfographicCard data={ifgData.c17} />;
        <InfographicCard data={ifgData.c18} />;
      </section>
      <section className={style.infographicBlue}>
        <CardsHead data={cardHeadData.head2} />
        <InfographicCard data={ifgData.c19} />;
        <InfographicCard data={ifgData.c20} />;
        <InfographicCard data={ifgData.c21} />;
      </section>
      <section>
        <LaunchpadHeader />
      </section>
      <section>
        <ExecutiveTeam />
      </section>
      <section>
        <AdvisoryBoard />
      </section>
      <section className={style.carousel}>
        <Carousel />
      </section>
      <section>
        <MostReadArticles data={articlesData.card} />
      </section>
      <section className={style.poppedup}>
        <PoppedupImage />
      </section>
      <section>
        <Cookies />
      </section>
      <section className={style.newsletter}>
        <Newsletter />
      </section>
      {/* <section>
        <Footer />
      </section> */}
    </section>
  );
};

export default LaunchpadPage2;
