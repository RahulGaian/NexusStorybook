import st from "./index.module.css";
import Img from "../../components/Image";

const Projection = () => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.topCont}>
          <span id={st.head}>Projection over the next 5 years</span>
          <Img src="./Images/ArrowRight.png" />
        </div>
        <div className={st.mainCont}>
          <div className={st.dataCont}></div>
          <div className={st.dataCont}></div>
          <div className={st.dataCont}></div>
          <div className={st.dataCont}></div>
        </div>
      </div>
    </div>
  );
};

export default Projection;
