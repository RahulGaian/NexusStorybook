import React from "react";
import Yield from "./index";
import { yieldData } from "./yieldData";

export default {
  title: "components/Yield",
  component: Yield,
};

export const Default = () => <Yield data={yieldData.yield1} />;
