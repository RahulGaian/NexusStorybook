import React from "react";
import AccordianFaq from "./index";
import { accordianData } from "./accordianData";

export default {
  title: "components/AccordianFaq",
  component: AccordianFaq,
};

export const accordianFaq = () => <AccordianFaq data={accordianData.accordianFaq} />;

export const Argstest = {
  args: {
    data:{
      header: "In short, what is thematic investing?",
      sections: [
        {
          items: [
            "Thematic investing is an investment approach that focuses on capitalizing on long-term trends and specific themes, rather than traditional asset classes, to build a diversified portfolio.",
            
          ],
        },
      ],

    }
  }
};