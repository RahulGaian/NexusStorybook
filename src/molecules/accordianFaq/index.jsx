import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { accordianData } from "./accordianData";

function AccordianFaq() {
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
    <div className={style.container}>

      <div className={style.texts}>
        <h1>Why is now the best moment?</h1>
        <p>
          Today, once more, we have a dream. We see a window of opportunity to
          rise to the very top of the upcoming Exponential Age. We are driven by
          a vision of becoming a transformative wealth management platform
          bridging the off-chain and on-chain worlds. Our mission is to
          distribute the value system of Web3 to tens of millions of humans
          through the SwissBorg ecosystem.
        </p>
      </div>

      <div className={style.contentContainer}>

        <div className={style.accordionContent}>
          {/* 1st  */}
          <div
            className={style.singleAccordion}
            onClick={() => {
              toggleAccordion(1);
            }}
          >
            <div className={style.AccordianHeader}>
              <div className={style.logo}>
                <img src="/Images/faqAccordianComponent/balance.svg" alt="logo" />
              </div>
              <div className={style.accordianHeaderTitle}>
                {accordianData[0].header}
              </div>
              <img
                src="/Images/faqAccordianComponent/dropdown.svg"
                alt="dropdown"
                className={style.dropdownImage}
              />
            </div>
            <div
              className={`${style.dropdownCondition} ${
                activeIndex === 1 ? style.active : ""
              }`}
            >
              <div className={style.AccordionItem}>
                {accordianData[0].sections[0].items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          {/* 2nd  */}
          <div
            className={style.singleAccordion}
            onClick={() => {
              toggleAccordion(2);
            }}
          >
            <div className={style.AccordianHeader}>
            <div className={style.logo}>
                <img src="/Images/faqAccordianComponent/web3.svg" alt="logo" />
              </div>
              <div className={style.accordianHeaderTitle}>
                {accordianData[1].header}
              </div>
              <img
                src="/Images/faqAccordianComponent/dropdown.svg"
                alt="dropdown"
                className={style.dropdownImage}
              />
            </div>
            <div
              className={`${style.dropdownCondition} ${
                activeIndex === 2 ? style.active : ""
              }`}
            >
              <div className={style.AccordionItem}>
                {accordianData[1].sections[0].items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          {/* 3rd  */}
          <div
            className={style.singleAccordion}
            onClick={() => {
              toggleAccordion(3);
            }}
          >
            <div className={style.AccordianHeader}>
            <div className={style.logo}>
                <img src="/Images/faqAccordianComponent/bearMarket.svg" alt="logo" />
              </div>
              <div className={style.accordianHeaderTitle}>
                {accordianData[2].header}
              </div>
              <img
                src="/Images/faqAccordianComponent/dropdown.svg"
                alt="dropdown"
                className={style.dropdownImage}
              />
            </div>
            <div
              className={`${style.dropdownCondition} ${
                activeIndex === 3 ? style.active : ""
              }`}
            >
              <div className={style.AccordionItem}>
                {accordianData[2].sections[0].items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          {/* 4th  */}
          <div
            className={style.singleAccordion}
            onClick={() => {
              toggleAccordion(4);
            }}
          >
            <div className={style.AccordianHeader}>
            <div className={style.logo}>
                <img src="/Images/faqAccordianComponent/thumbsUp.svg" alt="logo" />
              </div>
              <div className={style.accordianHeaderTitle}>
                {accordianData[3].header}
              </div>
              <img
                src="/Images/faqAccordianComponent/dropdown.svg"
                alt="dropdown"
                className={style.dropdownImage}
              />
            </div>
            <div
              className={`${style.dropdownCondition} ${
                activeIndex === 4 ? style.active : ""
              }`}
            >
              <div className={style.AccordionItem}>
                {accordianData[3].sections[0].items.map((item, index) => (
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
export default AccordianFaq;
