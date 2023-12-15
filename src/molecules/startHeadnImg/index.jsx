import st from "./index.module.css";
import Img from "../../components/Image";

const HeadnImg = ({ data }) => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer} style={{background: data.bgColor}}>
        <div className={st.leftCont}>
          <h1 style={{color: data.headParaTxtColor}}>{data.heading}</h1>
          <span style={{color: data.headParaTxtColor}}>{data.para}</span>
          <button style={{display: data.btnDisplay, background: data.btnbgColor, color: data.btnTxtColor}}>{data.btnctn}</button>
        </div>
        <div className={st.rightCont}>
          <Img src={data.imgURL} />
        </div>
      </div>
    </div>
  );
};

export default HeadnImg;
