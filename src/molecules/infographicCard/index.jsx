import st from "./index.module.css";

const InfographicCard = ({ data }) => {
  return (
    <div className={st.container} style={{background: data.bgColor}}>
      <div className={st.contentContainer}>
            <div className={st.mainCont} style={{flexDirection: data.flexDirection}}>
              <div className={st.leftCont}>
                <img src={data.imgURL} alt="card" />
              </div>
              <div className={st.rightCont}>
                <span id={st.head}>{data.head}</span>
                <span id={st.content} dangerouslySetInnerHTML={{ __html: data.content }}></span>
              </div>
            </div>
          </div>
      </div>
  );
};

export default InfographicCard;
