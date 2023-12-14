import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const EstimateEarning = ({ description, buttonText }) => {
  return (
    <div className={styles.container}>
    <div className={styles.estimateEarningContainer}>

        <div className={styles.descPara}>
          <p>{description}</p>
        </div>

        <div className={styles.estimateButton}>
          <button>{buttonText}</button>
        </div>

    </div>
    </div>
  );
};

EstimateEarning.propTypes = {
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default EstimateEarning;
