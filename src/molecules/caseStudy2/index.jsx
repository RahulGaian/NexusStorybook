import st from "./index.module.css";

const CaseStudy2 = ({ data }) => {
  return (
    <div className={st.container} style={{background: data.bgColor}}>
      <div className={st.contentContainer}>

            <div className={st.mainCont} style={{flexDirection: data.flexDirection, backgroundColor: data.bgColor}}>
              <div className={st.leftCont}>
                <img src={data.imgURL} alt="card" />
              </div>

              <div className={st.rightCont}>
                <span id={st.head}
                style={{color: data.headColor}}>{data.head}</span>

                <span id={st.content} dangerouslySetInnerHTML={{ __html: data.content }}
                style={{color: data.content_text_color}}></span>

                <button className={st.btn}
                style={{backgroundColor: data.btn_bgColor}}>{data.btn}</button>
              </div>

            </div>
          </div>

      </div>
  );
};

export default CaseStudy2;
