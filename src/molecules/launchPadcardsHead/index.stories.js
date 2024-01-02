import CardsHead from ".";
import { cardHeadData } from "./data";

export default {
  title: "Components/ CardsHead",
  component: CardsHead,
};

export const Head1 = () => <CardsHead data={cardHeadData.head1} />;
export const Head2 = () => <CardsHead data={cardHeadData.head2} />;
export const Head3 = () => <CardsHead data={cardHeadData.head3} />;
