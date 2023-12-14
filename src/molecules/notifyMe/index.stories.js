import React from 'react';
import NotifyMe from './index';

export default {
  title: 'Components/NotifyMe',
  component: NotifyMe,
};

const Template = (args) => <NotifyMe {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Download the SwissBorg app and kickstart your crypto wealth today',
  message: 'App is not available in US',
  buttonText: 'Notify Me',
};
