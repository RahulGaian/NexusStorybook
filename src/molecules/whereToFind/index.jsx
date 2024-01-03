import React from "react";
import style from "./index.module.css";
const WhereToFind = () => {
  return (
    <div className={style.main}>
      <div className={style.internal}>
        <h1 className={style.heading}>
          Sign up to receive exclusive CES insights
        </h1>
        <h1 className={style.subheading}>
          Get updates on the future of ambient computing and AI directly in your
          inbox
        </h1>
        <div className={style.inputs}>

          <input type="email" className={style.input1} placeholder="Email" />
          <br />
          <select
            id="cars"
            name="cars"
            className={style.input1 + " " + style.input2}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className={style.checkboxx}>
          <input
            type="checkbox"
            id="check"
            name="check"
            className={style.check}
            value="Bike"
          />
          <label for="check" className={style.checkdesc}>
            Yes, I’d like to sign-up to receive updates from Amazon Alexa about
            new products and related services.
          </label>



        </div>

        <input type="button" value={"Login"} className={style.button} />
      </div>
    </div>
  );
};

export default WhereToFind;
