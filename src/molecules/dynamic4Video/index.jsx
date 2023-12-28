import st from "./index.module.css";
import Img from "../../components/Image";
import { useState } from "react";

const Dynamic4Video = ({ data }) => {
  const [clickedButton, setClickedButton] = useState(1);

  const calculateMarginLeft = () => {
    const buttonCount = data.length;
    console.log(buttonCount);
    if (buttonCount === 3) {
      return "80px";
    } else if (buttonCount === 4) {
      return "250px";
    } else if (buttonCount === 5) {
      return "250px";
    } else {
      return "0px";
    }
  };

  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.features}>
          <div className={st.btncontainer}  style={{ marginLeft: window.innerWidth <= 600 ? calculateMarginLeft() : "0px" }}>
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
        <div className={st.slidingContent} style={{flexDirection: data[clickedButton - 1].flexDirection}}>
          <div className={st.leftCont}>
          {data[clickedButton - 1].videoSrc ? (
              <iframe
                width="560"
                height="315"
                src={data[clickedButton - 1].videoSrc}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className={st.fade}
                id={st.Video}
              ></iframe>
            ) : (
              <Img
                src={data[clickedButton - 1].imgSrc}
                alt=""
                key={data[clickedButton - 1].imgSrc}
                className={st.fade}
              />
            )}
          </div>
          <div className={st.rightCont}>
            <div className={st.rightContentCont}>
              <span id={st.head} style={{textAlign: data[clickedButton - 1].textAlign}}>
                {data[clickedButton - 1].heading}
              </span>
              <span id={st.para} style={{textAlign: data[clickedButton - 1].textAlign}}>{data[clickedButton - 1].para}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic4Video;
