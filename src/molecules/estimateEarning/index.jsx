import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const EstimateEarning = ({data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.estimateEarningContainer}>
        <div className={styles.descPara}>
          <p>{data.description}</p>
        </div>
        <button className={styles.estimateButton}>{data.buttonText}</button>
      </div>
    </div>
  );
};

EstimateEarning.propTypes = {
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default EstimateEarning;
