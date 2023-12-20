import st from "./index.module.css";
import Img from "../../components/Image";
import { useState } from "react";

const DynamicSlider = () => {
  const [clickedButton, setClickedButton] = useState(1);

  const buttonContent = [
    {
      imgSrc: "./Images/DynamicSlider/bc.png",
      heading: "Buy, sell & exchange always at the best available price",
      para: "Market volatility often leads to price differences across exchanges. Our Smart Engine takes advantage of this by finding the best execution route every time, meaning you get the best price from multiple exchanges.",
    },
    {
      imgSrc: "./Images/infographicCards/core.png",
      heading: "Access 3,283 unique crypto to fiat trading pairs",
      para: "Trade any fiat or crypto pair, even if it doesn’t exist on any exchange. EUR to BORG, or CHF to PAX Gold and more! We do all the conversions for you and find the best route and price.",
    },
    {
      imgSrc: "./Images/DynamicSlider/bc.png",
      heading: "Get a fully transparent exchange report",
      para: "With the Smart Exchange Report, you will be able to review and keep track of every exchange. Review all the details at each step of your exchange.",
    },
    {
      imgSrc: "./Images/infographicCards/core.png",
      heading: "Enjoy zero spreads and no inflated exchange rates",
      para: "While other apps claim “zero fees” but hide them in the exchange rate or spread, we always offer the best possible price without taking a cut. Instead, we charge a small transparent fee that we reinvest into the ecosystem.",
    },
  ];

  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.features}>
          <div className={st.btncontainer}>
            <button
              id={clickedButton === 1 ? st.btnclick : st.btn}
              onClick={() => setClickedButton(1)}
            >
              Best execution
            </button>
            <button
              id={clickedButton === 2 ? st.btnclick : st.btn}
              onClick={() => setClickedButton(2)}
            >
              Unique trading pairs
            </button>
            <button
              id={clickedButton === 3 ? st.btnclick : st.btn}
              onClick={() => setClickedButton(3)}
            >
              Transparent
            </button>
            <button
              id={clickedButton === 4 ? st.btnclick : st.btn}
              onClick={() => setClickedButton(4)}
            >
              No hidden fees
            </button>
          </div>
        </div>
        <div className={st.slidingContent}>
          <div className={st.leftCont}>
            <Img src={buttonContent[clickedButton - 1].imgSrc} />
          </div>
          <div className={st.rightCont}>
            <span id={st.head}>{buttonContent[clickedButton - 1].heading}</span>
            <span id={st.para}>{buttonContent[clickedButton - 1].para}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicSlider;
