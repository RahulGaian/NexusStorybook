import React from "react";
import SeriesBanner from "../../../molecules/seriesBanner";

import Footer from "../../../molecules/footer";
import AccordianFaq from "../../../molecules/accordianFaq";
import { accordianData } from "../../../molecules/accordianFaq/accordianData";


const LaunchpadPage2 = () => {
  return (
    <section>
      <section>
        <SeriesBanner />
      </section>

      <section>
      <AccordianFaq data={accordianData.accordianFaq} />;      </section>

      

      <section>
        {/* <Footer /> */}
      </section>
    </section>
  );
};

export default LaunchpadPage2;
