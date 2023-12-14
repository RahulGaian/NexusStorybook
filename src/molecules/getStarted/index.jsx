import st from "./index.module.css";
import Img from "../../components/Image";

const GetStarted = ({ data }) => {
    return(
        <div className={st.container}>
            <div className={st.contentContainer} style={{ background: data.bgcolor }}>
                <div className={st.imgContainer}>
                    <Img src={data.imgURL}/>
                </div>
                <div className={st.txtContainer}>
                    <span style={{color: data.contenttxtcolor}}>{data.contenttxt}</span>
                </div>
                <button className={st.gtstartedBtn} style={{color: data.btntextcolor, background: data.btnbgcolor}}>{data.btntext}</button>
            </div>
        </div>
    )
}

export default GetStarted;
