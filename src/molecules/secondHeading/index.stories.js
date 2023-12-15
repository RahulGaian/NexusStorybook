import React from 'react';
import SecondHeading from './secondHeading';
import { secondHeadingData } from './data.js';

export default {
  title: 'components/SecondHeading',
  component: SecondHeading
};

// const Template = (args) => <SecondHeading {...args} />; 
// export const Default = Template.bind({});
// Default.args = {
//   text: 'Our revolutionary Smart Engine takes the guesswork out of investing',
// };

export const secondHeading = () => <SecondHeading data={secondHeadingData.secondHeading}/>;
export const chooseThematic = () => <SecondHeading data={secondHeadingData.chooseThematic}/>;
export const investmentStatistics = () => <SecondHeading data={secondHeadingData.investmentStatistics}/>;
export const advancedCrypto = () => <SecondHeading data={secondHeadingData.advancedCrypto}/>;

export const Argstest = {
  args: {
    data:{
        text: 'Our revolutionary Smart Engine takes the guesswork out of investing'

    }
  }
};
