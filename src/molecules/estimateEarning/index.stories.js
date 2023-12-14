// components/estimateEarning/index.stories.js
import React from 'react';
import EstimateEarning from './index';

export default {
  title: 'Components/EstimateEarning',
  component: EstimateEarning,
};

const Template = (args) => <EstimateEarning {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'Get a compound yield that is optimized and paid out daily on your favorite cryptos like BTC, ETH, USDC, and more.',
  buttonText: 'Estimate earnings',
};

