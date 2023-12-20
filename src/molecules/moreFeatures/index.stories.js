import React from 'react';
import MoreFeatures from './index';
import { moreFeaturesData } from './data';

export default {
  title: 'components/MoreFeatures',
  component: MoreFeatures,
};

export const moreFeatures = () => <MoreFeatures data={moreFeaturesData.moreFeatures} />;

export const Argstest = {
  args: {
    data: {
      title: 'Explore more features in the SwissBorg app',
      cards: [
        {
          imgSrc: "./Images/moreFeatures/moreFeaturesA.svg",
          text: "BORG TOKEN",
        },
        {
          imgSrc: "./Images/moreFeatures/moreFeaturesB.svg",
          text: "SwissBorg Earn",
        },
        {
          imgSrc: "./Images/moreFeatures/moreFeaturesC.png",
          text: "Supported Assets",
        },
        {
          imgSrc: "./Images/moreFeatures/moreFeaturesD.png",
          text: "Rewards Program",
        },
      ],
    },
  },
};

