import InfographicCard from ".";
import { ifgData } from "./data";

export default {
    title: "Components / InfographicCard",
    component: InfographicCard
}

export const Card1 = () => <InfographicCard data={ifgData.c1} />;
export const Card2 = () => <InfographicCard data={ifgData.c2} />;
export const Card3 = () => <InfographicCard data={ifgData.c3} />;
export const Card4 = () => <InfographicCard data={ifgData.c4} />;
export const Card5 = () => <InfographicCard data={ifgData.c5} />;
export const Card6 = () => <InfographicCard data={ifgData.c6} />;

export const Argstest2 = {
    args: {
      data: {
        imgURL: "./Images/infographicCards/thi1.png",
        head: "Diversify risk in one tap",
        content: "95% of crypto projects fail. Putting all your bets on one token is highly risky. Instead broaden your horizons and invest across your favourite trends & themes, all with just one tap.",
        flexDirection: "row"
      },
    },
  };