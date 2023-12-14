import GetStarted from "../molecules/getStarted";
import {getStartedData} from "../molecules/getStarted/data";

export default {
    title: 'Component / Getstarted',
    component: GetStarted
};

export const Started = () => <GetStarted data={getStartedData.getStarted} />;
export const SwissBorg = () => <GetStarted data={getStartedData.swissBorg} />;
export const Argstest = {
    args: {
        data:{
            imgURL: "./Images/getStarted/iconsimage.png",
            contenttxt: "Boost your earnings and lower your fees with SwissBorg Premium",
            btntext: "Get started",
            bgcolor: "linear-gradient(270deg, #41aeff 5%, #2e7dcd 100%)",
            contenttxtcolor: "#FFF",
            btntextcolor: "#007CD7",
            btnbgcolor: "#FFF"
        }
    },
  };