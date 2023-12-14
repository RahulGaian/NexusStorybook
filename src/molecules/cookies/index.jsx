import React from "react";
import style from "./index.module.css";

function Cookies() {
  return (
    <div className={style.cookies}>
      <div className={style.cookiesContainer}>
        <div className={style.cookiesHeader}>
          <div className={style.cookiesLeftHeader}>
            <img
              src="./Images/cookies/cookies-icon.png"
              alt="cookies-icon"
              className={style.cookiesLeftImage}
            />
            <p className={style.cookiesLeftSubheading}>
              Manage cookies settings
            </p>
          </div>
          <div className={style.cookiesRightHeader}>
            <p>English</p>
            <img
              src="./Images/cookies/cookies-arrow.png"
              alt="cookies-icon"
              className={style.cookiesRightImage}
            />
          </div>
        </div>
        <div className={style.cookiesFooterContainer}>
          <div className={style.cookiesFooter}>
            <h6>SwissBorg app</h6>
            <div className={style.cookiesFooterList}>
              <p>Buy cryptos</p>
              <p>Earn cryptos</p>
              <p>Diversify smartly</p>
              <p>All cryptos</p>
            </div>
          </div>
          <div className={style.cookiesFooter}>
            <h6 style={{ color: "transparent" }}>SwissBorg app</h6>
            <div className={style.cookiesFooterList}>
              <p>Portfolio Visualizer</p>
              <p>Asset Analysis</p>
              <p>Supported countries</p>
              <p>Fees</p>
            </div>
          </div>
          <div className={style.cookiesFooter}>
            <h6>Community</h6>
            <div className={style.cookiesFooterList}>
              <p>Price and performance</p>
              <p>BORG Rewards Program</p>
              <p>Premium accounts</p>
              <p>Send crypto for free</p>
            </div>
          </div>
          <div className={style.cookiesFooter}>
            <h6>Learn</h6>
            <div className={style.cookiesFooterList}>
              <p>Blog</p>
              <p>Academy</p>
            </div>
          </div>
          <div className={style.cookiesFooter}>
            <h6>Team</h6>
            <div className={style.cookiesFooterList}>
              <p>About SwissBorg</p>
              <p>
                Careers
                <span>We're hiring</span>
              </p>
              <p>Affiliate program</p>
              <p>Help Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
