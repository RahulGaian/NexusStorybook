import React from "react";
import Investment from "./index";
import { InvestmentData } from "./investmentData";

export default {
  title: "components/Investment",
  component: Investment,
};

export const Investment1 = () => (
  <Investment data={InvestmentData.investmentOne} />
);
export const Investment2 = () => (
  <Investment data={InvestmentData.investmentTwo} />
);
export const Investment3 = () => (
  <Investment data={InvestmentData.investmentThree} />
);
