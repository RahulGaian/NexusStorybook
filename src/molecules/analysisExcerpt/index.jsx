import st from "./index.module.css";
import Img from "../../components/Image";

const AnalysisExcerpt = () => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.mainContainer}>
          <h1 id={st.mainhead}>
            Analysis excerpt from the SwissBorg app, updated every hour:
          </h1>
          <div className={st.middleContainer}>
            <div className={st.fdiv}>
              <Img src="./Images/analysisExcerpt/img1.png" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span id={st.cardHead}>Live BORG Analysis</span>
                <span id={st.para}>
                  In addition to a neutral RSI, all technical indicators are in
                  the red. Despite clear signals, the CyBorg Predictor is
                  uncertain for the short-term predictions. The momentum is
                  bearish and the selling pressure is high. Compared to
                  yesterday, the price has remained relatively stable with a
                  loss of only 0.0%. Volumes decreased with a drop of over
                  -11.48%.
                </span>
              </div>
            </div>
            <div className={st.sdiv}></div>
            <div className={st.tdiv}>
              <div className={st.ftdiv}>
                <div className={st.ttdivd1}>
                  <span id={st.tspan1}>CyBorg Predictor</span>
                </div>
                <div className={st.ttdivd2}>
                  <Img src="./Images/analysisExcerpt/arrowUp.png"></Img>
                  <div id={st.arrdiv1}>bullish</div>
                </div>
              </div>
              <div className={st.stdiv}></div>
              <div className={st.ttdiv}>
                <div className={st.ttdivd1}>
                  <span id={st.tspan1}>SwissBorg Indicator</span>
                </div>
                <div className={st.ttdivd2}>
                  <Img src="./Images/analysisExcerpt/arrowDown.png"></Img>
                  <div id={st.arrdiv2}>bearish</div>
                </div>
              </div>
            </div>
          </div>
          <div className={st.btmContainer}>
            <span id={st.btmspan1}>Last update:</span>
            <span id={st.btmspan2}>Tuesday, December 5, 2023 at 9:00:00 AM UTC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisExcerpt;
