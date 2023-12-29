import React from "react";
import SeriesBanner from "../../../molecules/seriesBanner";

import AccordianFaq from "../../../molecules/accordianFaq";
import { accordianData } from "../../../molecules/accordianFaq/accordianData";
import Dynamic4Video from "../../../molecules/dynamic4Video";
import { dynamic4VideoData } from "../../../molecules/dynamic4Video/data";
// import Investment from "../../../molecules/investmentData";
// import {  InvestmentData } from "../../../molecules/investmentData/index.stories";

const LaunchpadPage2 = () => {
  return (
    <section>
      <section>
        <SeriesBanner />
      </section>

      <section>
        <Dynamic4Video data={dynamic4VideoData.d4Cmp1} />
      </section>

      {/* <section>
      <Investment data={InvestmentData.investmentFour} />
      </section> */}

      <section>
        <AccordianFaq data={accordianData.accordianFaq} />
      </section>

      <section>

      </section>


    </section>
  );
};

export default LaunchpadPage2;
