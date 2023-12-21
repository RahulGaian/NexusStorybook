import React from 'react';
import DynamicAccordion from './index';
import { dynamicAccordianData } from './data';

export default {
  title: 'components/DynamicAccordion',
  component: DynamicAccordion,
};

export const DynamicAccordionDefault = () => (
  <DynamicAccordion data={dynamicAccordianData.dynamicAccordian1} />

);

export const DynamicAccordionDefault2 = () => (
    <DynamicAccordion data={dynamicAccordianData.dynamicAccordian2} />
  
  );

export const DynamicAccordionArgs = {
  args: {
    data: {
        dropdownsData: [
            {
              title:"In short, what is thematic investing?",
              content: "Thematic investing is an investment approach that focuses on capitalizing on long-term trends and specific themes, rather than traditional asset classes, to build a diversified portfolio.",
            },
            {
              title:"What is rebalancing?",
              content:"Rebalancing in thematic investing involves adjusting the allocation of assets within a portfolio to maintain the desired exposure to specific themes or trends.",
      
            },
            {
              title:"What is reallocation?",
              content: "For your portfolio to remain relevant & well diversified in fast-changing markets",
            },
            {
              title:"Do I really own the tokens/coins?",
              content: "Yes, with Thematics you own all the underlying assets. It is a bundle of tokens, contrary to an ETF or an  index",
            },
            {
              title:"What is the minimum investment amount?",
              content: "The minimum investment amount for the Golden Thematics is 40 USD or the equivalent in your local currency",
            },
            {
              title:"What is the minimum investment period?",
              content: "There is no minimum investment period. You are free to sell your Thematic investment at any time. In the future, you will be able to earn rewards based on your holding duration.",
            },
          ],
    },
  },
};
