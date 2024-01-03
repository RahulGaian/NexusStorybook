import React from "react";
import HeadAndText from "./index.jsx";
import { secondHeadingData } from "./data.js";

export default {
  title: "components/HeadAndText",
  component: HeadAndText,
};

export const secondHeading = () => (
  <HeadAndText data={secondHeadingData.secondHeading} />
);
export const secondHeading2 = () => (
    <HeadAndText data={secondHeadingData.secondHeading2} />
  );

export const Argstest = {
    args: {
      data: {
        text: "Build the next generation of ambient experiences",
        text2: "Visit the Amazon Experience Area at CES 2024, and discover how the world’s leading brands are working with Amazon to make every moment of every day better. Learn just how easy it is to build intuitive, proactive, and personalized experiences by leveraging the latest innovations in artificial intelligence from Amazon, and drive more innovation and growth for your business.",

      },
    },
  };