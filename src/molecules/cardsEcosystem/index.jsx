import st from "./index.module.css";
import Img from "../../components/Image";

const CardsEcosystem = ({ data }) => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <span id={st.mainHead}>{data.head}</span>
        <span id={st.para}>{data.para}</span>
        <div className={st.cardsContainer}>
          {data.cards.map((card, index) => (
            <div key={index} className={st.singleCardContainer}>
              <Img src={card.imgURL} />
              <span id={st.numbers}>{card.number}</span>
              <span id={st.moreInfo} style={{ display: card.moredisplay }}>
                {card.more}
              </span>
              <span id={st.name}>{card.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsEcosystem;
