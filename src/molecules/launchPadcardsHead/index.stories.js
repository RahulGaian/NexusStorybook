import CardsHead from ".";
import { cardHeadData } from "./data";

export default {
    title: "Components/ CardsHead",
    component: CardsHead
}

export const Head1 = () => <CardsHead data={cardHeadData.head1} />
export const Head2 = () => <CardsHead data={cardHeadData.head2} />