import st from "./index.module.css";
import Img from "../../components/Image";

const TextImageVert = () => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.mainCont}>
          <span id={st.mainhead}>Putting People First Breaks Records</span>
          <span id={st.para}>
            SwissBorg's Series A is a unique opportunity to invest in a company
            at an early stage.The valuation will change depending on expressed
            interest during Series A. More than 12,000 people have already
            invested making SwissBorg Series A one of the largest crowdfundings.
          </span>
          <div className={st.imgCont}>
            <Img src="./Images/txtnImgVert/img.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImageVert;
