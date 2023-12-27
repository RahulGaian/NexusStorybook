import React from "react";
import SecondHeading from "./secondHeading";
import { secondHeadingData } from "./data.js";

export default {
  title: "components/SecondHeading",
  component: SecondHeading,
};

export const secondHeading = () => (
  <SecondHeading data={secondHeadingData.secondHeading} />
);
export const chooseThematic = () => (
  <SecondHeading data={secondHeadingData.chooseThematic} />
);
export const investmentStatistics = () => (
  <SecondHeading data={secondHeadingData.investmentStatistics} />
);
export const advancedCrypto = () => (
  <SecondHeading data={secondHeadingData.advancedCrypto} />
);
export const infographicTitle = () => (
  <SecondHeading data={secondHeadingData.infographicTitle} />
);
export const autoInvest = () => (
  <SecondHeading data={secondHeadingData.autoInvest} />
);

export const Argstest = {
  args: {
    data: {
      text: "Our revolutionary Smart Engine takes the guesswork out of investing",
    },
  },
};
