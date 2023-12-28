import st from "./index.module.css";

const CardsHead = ({ data }) => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.mainCont}>
          <span id={st.mainhead}>{data.head}</span>
          <span id={st.para}>{data.para}</span>
        </div>
      </div>
    </div>
  );
};

export default CardsHead;
