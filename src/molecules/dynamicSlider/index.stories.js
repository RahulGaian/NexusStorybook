import React from 'react';
import Carousel from './index';

export default {
  title: 'components/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithCustomData = Template.bind({});
WithCustomData.args = {
  contentData: [
    {
      heading: "Custom Location 1",
      imagesrc1: "/path/to/image1.png",
      description: "Custom description for location 1",
      imagesrc2: "/path/to/image2.png",
      num: "+1 123 456 7890",
      imagesrc3: "/path/to/image3.png",
      mail: "custom@mail.com",
    },
  ],
};
