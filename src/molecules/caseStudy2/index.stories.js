import CaseStudy2 from ".";
import { caseStudy2Data } from "./data";

export default {
    title: "Components / CaseStudy2",
    component: CaseStudy2
}

export const Card1 = () => <CaseStudy2 data={caseStudy2Data.c1} />;
export const Card2 = () => <CaseStudy2 data={caseStudy2Data.c2} />;
export const Card3 = () => <CaseStudy2 data={caseStudy2Data.c3} />;
export const Card4 = () => <CaseStudy2 data={caseStudy2Data.c4} />;
export const Card5 = () => <CaseStudy2 data={caseStudy2Data.c5} />;
export const Card6 = () => <CaseStudy2 data={caseStudy2Data.c6} />;
export const Card7 = () => <CaseStudy2 data={caseStudy2Data.c7} />;

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