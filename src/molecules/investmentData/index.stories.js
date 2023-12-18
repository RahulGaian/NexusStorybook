// import React from "react";
// import Investment from "./index";
// import { InvestmentData } from "./investmentData";

// export default {
//   title: "components/Investment",
//   component: Investment,
// };

// export const InvestmentOne = () => (
//   <Investment data={InvestmentData.investmentOne} />
// );

// export const ArgsTest = {
//   args: {
//     investmentOne: [
//       {
//         investors1: "17,366",
//         investorsName1: "Total Thematics Investors",
//       },
//       {
//         investors2: "51,5555",
//         investorsName2: "Total Investors",
//       },
//       {
//         investors3: "41,000",
//         investorsName3: "Total Thematics",
//       },
//     ],
//   },
// };

import React from "react";
import Investment from "./index";
import { InvestmentData } from "./investmentData";

export default {
  title: "components/Investment",
  component: Investment,
};

export const InvestmentOne = () => (
  <Investment data={InvestmentData.investmentOne} />
);
