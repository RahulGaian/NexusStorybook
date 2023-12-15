import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const NotifyMe = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.notifyContainer}>
        <div className={styles.mainText}>
          <h1>{data.title}</h1>
        </div>
        <div className={styles.secondryText}>
          <p>{data.message}</p>
        </div>
        <button className={styles.notifyBtn}>{data.buttonText}</button>
      </div>
    </div>
  );
};

NotifyMe.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default NotifyMe;

// import React from "react";

// const NotifyMe = () => {
//   return (
//     <div>
//       <div>
//         <h1>
//           Download the SwissBorg app and kickstart your crypto wealth today
//         </h1>
//       </div>
//       <div>
//         <p>App is not available in US</p>
//       </div>
//       <div>
//         <button>Notify Me</button>
//       </div>
//     </div>
//   );
// };

// export default NotifyMe;
