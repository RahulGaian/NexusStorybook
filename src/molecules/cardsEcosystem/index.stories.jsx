import CardsEcosystem from ".";
import { cardsData } from "./data";

export default {
    title: "Components / CardsEcosystem",
    component: CardsEcosystem
}

export const Default = () => <CardsEcosystem data={cardsData.ecosystemCards}/>
export const Default1 = () => <CardsEcosystem data={cardsData.borgBuyBack} />