// components/estimateEarning/index.stories.js
import React from "react";
import EstimateEarning from "./index";
import { estimateData } from "./data";

export default {
  title: "Components/EstimateEarning",
  component: EstimateEarning,
};

export const estimate1 = () => <EstimateEarning data={estimateData.estimate1} />;


