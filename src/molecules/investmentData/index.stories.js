import React from "react";
import Investment from "./index";
import { InvestmentData } from "./investmentData";

export default {
  title: "components/Investment",
  component: Investment,
};

export const Default = () => <Investment data={InvestmentData.investmentOne} />;
export const Default1 = () => (
  <Investment data={InvestmentData.investmentTwo} />
);
