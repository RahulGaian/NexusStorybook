import React from "react";
import Yield from "./index";
import { yieldData } from "./yieldData";

export default {
  title: "components/Yield",
  component: Yield,
};

export const yieldComponent1 = () => <Yield data={yieldData.yield1} />;
export const yieldComponent2 = () => <Yield data={yieldData.yield2} />;
export const yieldComponent3 = () => <Yield data={yieldData.yield3} />;
