import React from "react";
import MobileAndText from "./index";
import { mobileAndTextData } from "./mobileAndTextData";

export default {
  title: "components/MobileAndText",
  component: MobileAndText,
};

export const MobileTextComponent1 = () => (
  <MobileAndText data={mobileAndTextData.mobileData1.mobileText1} />
);
export const MobileTextComponent2 = () => (
  <MobileAndText data={mobileAndTextData.mobileData2.mobileText2} />
);
export const MobileTextComponent3 = () => (
  <MobileAndText data={mobileAndTextData.mobileData3.mobileText3} />
);
export const MobileTextComponent4 = () => (
  <MobileAndText data={mobileAndTextData.mobileData4.mobileText4} />
);
export const MobileTextComponent5 = () => (
  <MobileAndText data={mobileAndTextData.mobileData4.mobileText4} />
);
