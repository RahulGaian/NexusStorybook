import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <div className={styles.AccordianHeader}>
        <div className={styles.accordianHeaderTitle} onClick={toggleAccordion}>
          {title}
          <img
            src="/Images/faqAccordianComponent/dropdown.svg"
            alt="Toggle Icon"
            className={`${styles.toggleIcon} ${
              isOpen ? styles.rotateIcon : ""
            }`}
          />
        </div>

        {/* {isOpen && <div className={styles.accordionAnswer}>{content}</div>} */}
        {isOpen && (
          <div
            className={`${styles.accordionAnswer} ${isOpen ? "rotate" : ""}`}
          >
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

const DynamicAccordion = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.titleHeader}>
          <div className={styles.faqTitle}>
            <h1>Frequently asked questions</h1>
          </div>
        </div>

        <div className={styles.accordionContent}>
          {data.dropdownsData.map((dropdown, index) => (
            <AccordionItem
              key={index}
              title={dropdown.title}
              content={dropdown.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicAccordion;
