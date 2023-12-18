import React from 'react';
import CaseStudy from './index';
import { caseStudyData } from './data';

export default {
    title: 'components/CaseStudy',
    component: CaseStudy
};

export const caseStudy = () => <CaseStudy data={caseStudyData.caseStudy}/>;


export const Argstest = {
  args: {
    data:{
        imgUrl: "./Images/caseStudy/caseStudy.png",
        heading: "Reallocations so your investment stays up-to-date",
        para: "Reallocations update your Thematic’s tokensand their percentages (%) as the market evolves and new projects emerge. Invest with peace of mind knowing SwissBorg's team regularly checks and updates the tokens in your Thematics.",
        buttonText: "Get Started"
    }
  }
};
