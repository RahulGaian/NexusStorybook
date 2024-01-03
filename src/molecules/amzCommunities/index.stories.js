import React from "react";
import Communities from "./index.jsx";
import { communitiesData } from "./data.js";

export default {
  title: "components/Communities",
  component: Communities,
};

export const community1 = () => (
  <Communities data={communitiesData.community1} />
);

export const Argstest = {
  args: {
    data: {
      imagesrc: "path/to/your/image.jpg",
      nameText: "Community Name",
      texts: "Description of the community.",
    },
  },
};
