import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { cookiesData } from "./cookiesData";

function Cookies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex) => activeIndex);
    });
  });
  return (
    <div className={style.cookies}>
      <div className={style.cookiesContainer}>
        <div className={style.cookiesHeader}>
          <div className={style.cookiesLeftHeader}>
            <img
              src="/Images/cookies/cookies-icon.png"
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
              src="/Images/cookies/cookies-arrow.png"
              alt="cookies-icon"
              className={style.cookiesRightImage}
            />
          </div>
        </div>
        <div className={style.cookiesFooterContainer}>
          <div className={style.cookiesFooter}>
            <h6 className={style.cookiesFooterHeader}>SwissBorg app</h6>
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
      {/* mobile view */}
      <div className={style.mobileCookiesContainer}>
        <div className={style.mobileCookiesHeader}>
          <div className={style.mobileCookiesLeftHeader}>
            <img
              src="/Images/cookies/cookies-icon.png"
              alt="cookies-icon"
              className={style.mobileCookiesLeftImage}
            />
            <p className={style.mobileCookiesLeftSubheading}>
              Manage cookies settings
            </p>
          </div>
          <div className={style.mobileCookiesRightHeader}>
            <p>English</p>
            <img
              src="/Images/cookies/cookies-arrow.png"
              alt="cookies-icon"
              className={style.mobileCookiesRightImage}
            />
          </div>
        </div>
        {/* Accordion Component */}
        <div className={style.mobileCookiesAccordionCont}>
          {/* 1st Accordion */}
          <div
            className={style.mobileCookiesAccordion}
            onClick={() => {
              toggleAccordion(1);
            }}
          >
            <div className={style.mobileCookiesAccordionHeaderCont}>
              <div className={style.mobileCookiesAccordionHeader}>
                {cookiesData[0].header}
              </div>
              <img
                src="/Images/cookies/dropdown.png"
                alt="dropdown"
                className={style.mobileCookiesAccordionImg}
              />
            </div>
            <div
              className={`${style.mobileCookiesAccordionContent} ${
                activeIndex === 1 ? style.active : ""
              }`}
            >
              <div className={style.mobileCookiesAccordionList}>
                {cookiesData[0].sections[0].items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          {/* 2nd Accordion */}
          <div
            className={style.mobileCookiesAccordion}
            onClick={() => {
              toggleAccordion(2);
            }}
          >
            <div className={style.mobileCookiesAccordionHeaderCont}>
              <div className={style.mobileCookiesAccordionHeader}>
                {cookiesData[1].header}
              </div>
              <img
                src="/Images/cookies/dropdown.png"
                alt="dropdown"
                className={style.mobileCookiesAccordionImg}
              />
            </div>
            <div
              className={`${style.mobileCookiesAccordionContent} ${
                activeIndex === 2 ? style.active : ""
              }`}
            >
              <div className={style.mobileCookiesAccordionList}>
                {cookiesData[1].sections[0].items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          {/* 3rd Accordion */}
          <div
            className={style.mobileCookiesAccordion}
            onClick={() => {
              toggleAccordion(3);
            }}
          >
            <div className={style.mobileCookiesAccordionHeaderCont}>
              <div className={style.mobileCookiesAccordionHeader}>
                {cookiesData[2].header}
              </div>
              <img
                src="/Images/cookies/dropdown.png"
                alt="dropdown"
                className={style.mobileCookiesAccordionImg}
              />
            </div>
            <div
              className={`${style.mobileCookiesAccordionContent} ${
                activeIndex === 3 ? style.active : ""
              }`}
            >
              <div className={style.mobileCookiesAccordionList}>
                {cookiesData[2].sections[0].items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          {/* 4th Accordion */}
          <div
            className={style.mobileCookiesAccordion}
            onClick={() => {
              toggleAccordion(4);
            }}
          >
            <div className={style.mobileCookiesAccordionHeaderCont}>
              <div className={style.mobileCookiesAccordionHeader}>
                {cookiesData[3].header}
              </div>
              <img
                src="/Images/cookies/dropdown.png"
                alt="dropdown"
                className={style.mobileCookiesAccordionImg}
              />
            </div>
            <div
              className={`${style.mobileCookiesAccordionContent} ${
                activeIndex === 4 ? style.active : ""
              }`}
            >
              <div className={style.mobileCookiesAccordionList}>
                {cookiesData[3].sections[0].items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
