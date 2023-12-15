import HeadnImg from ".";
import { headnImgData } from "./data";

export default {
  title: "Components / HeadnImg",
  component: HeadnImg,
};

export const FiatCrypto = () => <HeadnImg data={headnImgData.fiatCrypto} />;
export const Basket = () => <HeadnImg data={headnImgData.Basket} />;
export const AppAssets = () => <HeadnImg data={headnImgData.appAssets} />;
export const AccountAnalysis = () => (
  <HeadnImg data={headnImgData.accountAnalysis} />
);
export const SwissBorgEarn = () => (
  <HeadnImg data={headnImgData.swissBorgEarn} />
);
export const TopUp = () => <HeadnImg data={headnImgData.topUp} />;
export const SmartInvestment = () => (
  <HeadnImg data={headnImgData.smartInvestment} />
);
export const AutoInvest = () => <HeadnImg data={headnImgData.autoInvest} />;
export const Argstest2 = {
  args: {
    data: {
      heading: "More than a basket of tokens",
      para: "Strengthen your investments with the most promising crypto themes.",
      imgURL: "./Images/headnImg/basket.png",
      bgColor: "linear-gradient(180deg, #004A81 0%, #007CD7 100%)",
      headParaTxtColor: "#FFF",
      btnctn: "Get Started",
      btnDisplay: "flex",
      btnbgColor: "#FFA200",
      btnTxtColor: "#FFF",
    },
  },
};
