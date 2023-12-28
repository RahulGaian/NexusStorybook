import React from 'react';
import PlatfromIndex from './platfromIndex';
import { solutionData,marketplaceData,platformData } from '../../constants/data';
export default {
  title: "pages/platform",
  component: PlatfromIndex,
};

export const platform = () => (
  <PlatfromIndex   platform={platformData[1]}/>
);
