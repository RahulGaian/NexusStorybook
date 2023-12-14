// components/secondHeading/index.stories.js
import React from 'react';
import SecondHeading from './secondHeading';

export default {
  title: 'Components/SecondHeading', // Corrected casing
  component: SecondHeading, // Corrected casing
};

const Template = (args) => <SecondHeading {...args} />; // Corrected casing

export const Default = Template.bind({});
Default.args = {
  text: 'Our revolutionary Smart Engine takes the guesswork out of investing',
};
