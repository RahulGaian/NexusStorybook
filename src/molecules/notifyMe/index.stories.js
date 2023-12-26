import React from "react";
import NotifyMe from "./index";
import { notifyMeData } from "./data";

export default {
  title: "Components/NotifyMe",
  component: NotifyMe,
  argTypes: {
    showMainText: { control: "boolean" },
    showMainPara: {control: "boolean"},
    showSecondaryText: { control: "boolean" },
    showButton: { control: "boolean" },
    showImageContainer: { control: "boolean" },
  },
};

const Template = (args) => <NotifyMe data={args.data} {...args} />;

export const notifyMe = Template.bind({});
notifyMe.args = {
  data: notifyMeData.notifyMe,
  showMainText: true,
  showMainPara: false,
  showSecondaryText: true,
  showButton: true,
  showImageContainer: false,
};

export const notifyMe2 = Template.bind({});
notifyMe2.args = {
  data: notifyMeData.notifyMe2,
  showMainText: true,
  showMainPara: false,
  showSecondaryText: true,
  showButton: true,
  showImageContainer: false,
};

export const notifyMe3 = Template.bind({});
notifyMe3.args = {
  data: notifyMeData.notifyMe3,
  showMainText: true,
  showMainPara: false,
  showSecondaryText: false,
  showButton: false,
  showImageContainer: true,
};

export const notifyMe4 = Template.bind({});
notifyMe4.args = {
  data: notifyMeData.notifyMe4,
  showMainText: true,
  showMainPara: true,
  showSecondaryText: true,
  showButton: true,
  showImageContainer: false,
};

// import React from "react";
// import NotifyMe from "./index";
// import { notifyMeData } from "./data";

// export default {
//   title: "Components/NotifyMe",
//   component: NotifyMe,
// };

// export const notifyMe = () => <NotifyMe data={notifyMeData.notifyMe} />;
// export const notifyMe2 = () => <NotifyMe data={notifyMeData.notifyMe2}/>;
// export const notifyMe3 = ()=> <NotifyMe data={notifyMeData.notifyMe3}/>;

// export const Argstest = {
//   args: {
//     data: {
//       title: 'Download the SwissBorg app and kickstart your crypto wealth today',
//       message: 'App is not available in US',
//       buttonText: 'Notify Me',
//       imgURL1:"",
//       imgURL2:"",
//       imgURL3:""
//     }
//   }
// };
