import st from "./index.module.css";
import Img from "../Image";

const GetStarted = () => {
    return(
        <div className={st.container}>
            <div className={st.contentContainer}>
                <div className={st.imgContainer}>
                    <Img src={"./Images/getStarted/iconsimage.png"}/>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;