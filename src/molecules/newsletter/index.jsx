import React from "react";
import style from "./index.module.css";

function Newsletter() {
  return (
    <div className={style.newsletterContainer}>
      <div className={style.newsletterContentContainer}>
        <div className={style.newsletterTop}>
          <img src="./Images/newsletter/addbtn.png" alt="" />
          <p>Proudly engineered in Switzerland</p>
        </div>
        <div className={style.newsletterBottom}>
          <div className={style.newsletterLeft}>
            <div className={style.newsletterLeftPara}>
              <p>Subscribe to our newsletter</p>
              <p>Receive official updates when you join our mailing list</p>
            </div>
            <div className={style.newsletterLeftInputCont}>
              <div className={style.newletterLeftInput}>
                <input placeholder="Name (required)" />
                <input placeholder="Email (required)" />
              </div>
              <button className={style.newletterLeftBtn}>
                <img src="./Images/newsletter/arrow.png" alt="" />
              </button>
            </div>
          </div>
          <div className={style.newsletterRight}>
            <div className={style.newsletterRightPara}>
              <p>Be part of our growing global community</p>
              <p>Follow and subscribe to our channels</p>
            </div>
            <div className={style.newsletterRightSocial}>
              <img src="./Images/newsletter/twitter.png" alt="" />
              <img src="./Images/newsletter/github.png" alt="" />
              <img src="./Images/newsletter/youtube.png" alt="" />
              <img src="./Images/newsletter/facebook.png" alt="" />
              <img src="./Images/newsletter/instagram.png" alt="" />
              <img src="./Images/newsletter/linkedin.png" alt="" />
              <img src="./Images/newsletter/telegram.png" alt="" />
              <img src="./Images/newsletter/tiktok.png" alt="" />
              <img src="./Images/newsletter/message.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
