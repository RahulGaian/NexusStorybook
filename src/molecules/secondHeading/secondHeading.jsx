// components/secondHeading/secondHeading.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const SecondHeading = ({ text }) => {
  return (
    <div className={styles.secondHeading}>
      <div>
        <p className={styles.headingText}>{text}</p>
      </div>
    </div>
  );
};

SecondHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SecondHeading;
