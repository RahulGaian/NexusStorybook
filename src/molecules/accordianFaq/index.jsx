
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
 
      <div className={style.contentContainer}>
        <div className={style.titleHeader}>
          <div className={style.faqTitle}>
            <h1>Frequently asked questions</h1>
          </div>
        </div>

        <div className={style.accordionContent}>
          {/* 1st  */}
          <div
            className={style.singleAccordion}
            onClick={() => {
              toggleAccordion(1);
            }}
          >
            <div className={style.AccordianHeader}>
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
          {/* 5th  */}
          <div
            className={style.singleAccordion}
            onClick={() => {
              toggleAccordion(5);
            }}
          >
            <div className={style.AccordianHeader}>
              <div className={style.accordianHeaderTitle}>
                {accordianData[4].header}
              </div>
              <img
                src="/Images/faqAccordianComponent/dropdown.svg"
                alt="dropdown"
                className={style.dropdownImage}
              />
            </div>
            <div
              className={`${style.dropdownCondition} ${
                activeIndex === 5 ? style.active : ""
              }`}
            >
              <div className={style.AccordionItem}>
                {accordianData[4].sections[0].items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          {/* 6th  */}
          <div
            className={style.singleAccordion}
            onClick={() => {
              toggleAccordion(6);
            }}
          >
            <div className={style.AccordianHeader}>
              <div className={style.accordianHeaderTitle}>
                {accordianData[5].header}
              </div>
              <img
                src="/Images/faqAccordianComponent/dropdown.svg"
                alt="dropdown"
                className={style.dropdownImage}
              />
            </div>
            <div
              className={`${style.dropdownCondition} ${
                activeIndex === 6 ? style.active : ""
              }`}
            >
              <div className={style.AccordionItem}>
                {accordianData[5].sections[0].items.map((item, index) => (
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
export default AccordianFaq 
