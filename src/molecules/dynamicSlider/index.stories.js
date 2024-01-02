import React from "react";
import Carousel from "./index";

export default {
  title: "components/Carousel",
  component: Carousel,
};

export const carouselWithDefaultData = () => <Carousel />;

export const carouselWithCustomData = () => (
  <Carousel
    contentData={[
      {
        description: "Custom data 1",
        imagesrc1: "/Images/customData1.webp",
        name: "Custom Name 1",
        designation: "Custom Designation 1",
      },
      {
        description: "Custom data 2",
        imagesrc1: "/Images/customData2.webp",
        name: "Custom Name 2",
        designation: "Custom Designation 2",
      },
    ]}
  />
);
