// components/secondHeading/secondHeading.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const SecondHeading = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.headingText}>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  );
};

SecondHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SecondHeading;
