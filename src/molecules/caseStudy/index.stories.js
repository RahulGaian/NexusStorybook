import React from 'react';
import CaseStudy from './index';
import { caseStudyData } from './data';

export default {
    title: 'components/CaseStudy',
    component: CaseStudy
};

export const caseStudy = () => <CaseStudy data={caseStudyData.caseStudy}/>;
export const caseStudy2 = () => <CaseStudy data={caseStudyData.caseStudy2}/>;
export const caseStudy3 = () => <CaseStudy data={caseStudyData.caseStudy3}/>

// export const caseStudy4 = () => <CaseStudy data={caseStudyData.caseStudy4}/>



export const Argstest = {
  args: {
    data:{
      imgURL: "/Images/caseStudy/caseStudy.png",
      heading: "Reallocations so your investment stays up-to-date",
      para: "Reallocations update your Thematic’s tokensand their percentages (%) as the market evolves and new projects emerge. Invest with peace of mind knowing SwissBorg's team regularly checks and updates the tokens in your Thematics.",
      buttonText: "Get Started",
      borderRad: "20px",
      btn_bgColor: "",
      btn_txt_color:"#007CD7",
      btn_border: "1px solid #007CD7"
    }
  }
};
