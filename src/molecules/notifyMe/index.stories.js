import React from "react";
import NotifyMe from "./index";
import { notifyMeData } from "./data.js";

export default {
  title: "Components/NotifyMe",
  component: NotifyMe,
};

// const Template = (args) => <NotifyMe {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   title: 'Download the SwissBorg app and kickstart your crypto wealth today',
//   message: 'App is not available in US',
//   buttonText: 'Notify Me',
// };

export const notifyMe = () => <NotifyMe data={notifyMeData.notifyMe} />;
export const notifyMe2 = () => <NotifyMe data={notifyMeData.notifyMe2}/>;

export const Argstest = {
  args: {
    data: {
      title: "Download the SwissBorg app and kickstart your crypto wealth today",
      message: "App is not available in US",
      buttonText: "Notify Me"
    }
  }
};
