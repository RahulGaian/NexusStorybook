import React from "react";
import style from "./index.module.css";
const WhereToFind = () => {
  return (
    <div className={style.main}>
      <div className={style.internal}>
        <h1 className={style.heading}>
          Sign up to receive exclusive NexusConnect Insights
        </h1>
        <h1 className={style.subheading}>
          Get updates on the bleeding edge of broadcast technology, digital
          transformation and bricolage directly in your inbox
        </h1>
        <div className={style.inputs}>
          <input type="email" className={style.input1} placeholder="Email" />
          <br />
          <select
            id="cars"
            name="cars"
            className={style.input1 + " " + style.input2}
          >
            <option value="countries">Country:</option>
            <option value="india">India</option>
            <option value="usa">United States of America</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="germany">Germany</option>
            <option value="spain">Spain</option>
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
            Yes, I’d like to sign-up to receive updates from NexusConnect about
            new products and related services.
          </label>
        </div>

        <input type="button" value={"Login"} className={style.button} />
      </div>
    </div>
  );
};

export default WhereToFind;
