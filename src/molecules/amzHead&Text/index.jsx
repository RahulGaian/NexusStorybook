import React from 'react';
import styles from "./index.module.css";


const HeadAndText = ({data}) => {
  return (
    <div className={styles.container}>
    <div className={styles.headingContainer}>
      <div className={styles.headingText}>
        <h1>{data.text}</h1>
        <p>{data.text2}</p>
      </div>
    </div>
  </div>
  )
}

export default HeadAndText