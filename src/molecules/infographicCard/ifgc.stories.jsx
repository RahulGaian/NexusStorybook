import InfographicCard from ".";
import { ifgData } from "./data";

export default {
  title: "Components / InfographicCard",
  component: InfographicCard,
};

export const Card1 = () => <InfographicCard data={ifgData.c1} />;
export const Card2 = () => <InfographicCard data={ifgData.c2} />;
export const Card3 = () => <InfographicCard data={ifgData.c3} />;
export const Card4 = () => <InfographicCard data={ifgData.c4} />;
export const Card5 = () => <InfographicCard data={ifgData.c5} />;
export const Card6 = () => <InfographicCard data={ifgData.c6} />;
export const Card7 = () => <InfographicCard data={ifgData.c7} />;
export const Card8 = () => <InfographicCard data={ifgData.c8} />;
export const Card9 = () => <InfographicCard data={ifgData.c9} />;
export const Card10 = () => <InfographicCard data={ifgData.c10} />;
export const Card11 = () => <InfographicCard data={ifgData.c11} />;
export const Card12 = () => <InfographicCard data={ifgData.c12} />;
export const Card13 = () => <InfographicCard data={ifgData.c13} />;
export const Card14 = () => <InfographicCard data={ifgData.c14} />;

export const Argstest2 = {
  args: {
    data: {
      imgURL: "/Images/infographicCards/thi1.png",
      head: "Diversify risk in one tap",
      content:
        "95% of crypto projects fail. Putting all your bets on one token is highly risky. Instead broaden your horizons and invest across your favourite trends & themes, all with just one tap.",
      flexDirection: "row",
    },
  },
};
