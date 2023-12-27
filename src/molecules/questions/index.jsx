import React from "react";
import style from "./index.module.css";

function Questions() {
  return (
    <div className={style.questionsContainer}>
      <div className={style.questionsContentCont}>
        <h6>Questions and more info</h6>
        <p>
          If you are having any trouble with this process please reach out to
          our Support team through the SwissBorg app.
        </p>
      </div>
    </div>
  );
}

export default Questions;
