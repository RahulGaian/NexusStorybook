import st from "./index.module.css";
import Img from "../../components/Image";
import { useState } from "react";

const Dynamic4Option = ({ data }) => {
  const [clickedButton, setClickedButton] = useState(1);

  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.features}>
          <div className={st.btncontainer}>
            {data.map((content, index) => (
              <button
                key={index}
                id={clickedButton === index + 1 ? st.btnclick : st.btn}
                onClick={() => setClickedButton(index + 1)}
              >
                {content.buttonLabel}
              </button>
            ))}
          </div>
        </div>
        <div className={st.slidingContent} style={{flexDirection: data.flexDirection}}>
          <div className={st.leftCont}>
            <Img
              src={data[clickedButton - 1].imgSrc}
              alt=""
              key={data[clickedButton - 1].imgSrc}
              className={st.fade}
            />
          </div>
          <div className={st.rightCont}>
            <div className={st.rightContentCont}>
              <span id={st.head}>
                {data[clickedButton - 1].heading}
              </span>
              <span id={st.para}>{data[clickedButton - 1].para}</span>
              <button id={st.learnMorebtn} style={{display: data[clickedButton - 1].btnDisplay}}>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic4Option;