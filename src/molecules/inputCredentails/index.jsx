import React, { useState } from "react";
import style from "./index.module.css";
import Img from "../../components/Image";
import Questions from "../questions";

function InputCredential() {
  const [credential, setCredential] = useState("");

  const handleCredentialChange = (event) => {
    setCredential(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Entered Credential:", credential);
    setCredential("");
  };
  return (
    <div>
      <div className={style.inputContainer}>
        <div className={style.inputContentContainer}>
          <div className={style.inputLeft}>
            <div className={style.inputLeftContent}>
              <input
                placeholder="Insert your Audit Credential ID"
                className={style.inputLeftInputData}
                value={credential}
                onChange={handleCredentialChange}
                maxLength={20}
              />
              <span className={style.inputLeftHidepw}>
                <Img
                  src="/Images/inputCredentails/hidePw.png"
                  className={style.inputLeftHidepwImg}
                  alt="Hide Password"
                ></Img>
              </span>
            </div>
            <div className={style.inputLeftBtnCont}>
              <button className={style.inputLeftBtn} onClick={handleSubmit}>
                <Img
                  src="/Images/inputCredentails/arrow.png"
                  alt="Submit"
                ></Img>
              </button>
            </div>
          </div>
          <div className={style.inputRight}>
            <p>Where is my Audit Credential ID?</p>
            <Img src="/Images/inputCredentails/info.png"></Img>
          </div>
        </div>
      </div>
      <br />
      <Questions />
    </div>
  );
}

export default InputCredential;
