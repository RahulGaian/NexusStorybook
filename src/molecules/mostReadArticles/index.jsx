import st from "./index.module.css";
import Img from "../../components/Image";

const MostReadArticles = ({ data }) => {
  const trimText = (text) => {
    return text.length > 40 ? text.substring(0, 40) + "..." : text;
  };

  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <span id={st.mainhead}>Most read articles</span>
        <div className={st.mainCont}>
        <div className={st.cardsContainer}>
          {data.map((item, index) => (
            <div key={index} className={st.card}>
              <div className={st.topCont}>
                <Img src={item.imgURL} />
              </div>
              <div className={st.bottomCont}>
                <span id={st.date}>{item.date}</span>
                <span id={st.heading}>{trimText(item.heading)}</span>
                <span id={st.para}>{trimText(item.para)}</span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MostReadArticles;