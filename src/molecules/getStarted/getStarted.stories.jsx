import GetStarted from ".";
import { getStartedData } from "./data";

export default {
  title: "Components / Getstarted",
  component: GetStarted
};

export const Started = () => <GetStarted data={getStartedData.getStarted} />;
export const SwissBorg = () => <GetStarted data={getStartedData.swissBorg} />;
export const InviteFriends = () => <GetStarted data={getStartedData.inviteFriends} />;
export const Blog = () => <GetStarted data={getStartedData.readBlog} />;
export const AuditList = () => <GetStarted data={getStartedData.auditList} />;
export const Argstest = {
  args: {
    data: {
      imgURL: "/Images/getStarted/iconsimage.png",
      contenttxt:
        "Boost your earnings and lower your fees with SwissBorg Premium",
      btntext: "Get started",
      bgcolor: "linear-gradient(270deg, #41aeff 5%, #2e7dcd 100%)",
      contenttxtcolor: "#FFF",
      btntextcolor: "#007CD7",
      btnbgcolor: "#FFF",
    },
  },
};
