import React from "react";
import MobileAndText from "./index";
import { mobileAndTextData } from "./mobileAndTextData";

export default {
  title: "components/MobileAndText",
  component: MobileAndText,
};

export const Default = () => (
  <MobileAndText data={mobileAndTextData.mobileData1.mobileText1} />
);
export const Default1 = () => (
  <MobileAndText data={mobileAndTextData.mobileData2.mobileText2} />
);
export const Default2 = () => (
  <MobileAndText data={mobileAndTextData.mobileData3.mobileText3} />
);
