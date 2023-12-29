import st from "./index.module.css";
import Img from "../../components/Image";

const IfgCardArrow = () => {
  return (
    <div className={st.container}>
        <div className={st.contentContainer}>
            <div className={st.imgCont}>
                <Img id={st.arrowImage} src="./Images/SVG.png" />
            </div>
        </div>
    </div>
  )
}

export default IfgCardArrow;
