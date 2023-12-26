import React from 'react';
import SolutionPageIndex from './SolutionPageIndex';
import { solutionData } from '../../constants/data';
export default {
  title: "pages/Solution",
  component: SolutionPageIndex,
};

export const Solutions = () => (
  <SolutionPageIndex   solution={solutionData[0]}/>
);
