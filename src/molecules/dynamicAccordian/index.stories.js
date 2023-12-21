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

export const DynamicAccordionArgs = {
  args: {
    data: {
      dropdownsData: [
        {
          title: 'Question 1',
          content: 'Answer 1',
        },
        {
          title: 'Question 2',
          content: 'Answer 2',
        },
        {
          title: 'Question 3',
          content: 'Answer 3',
        },
      ],
    },
  },
};
