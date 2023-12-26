import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import Img from "../../components/Image";


const NotifyMe = ({ data, showMainPara, showMainText, showSecondaryText, showButton, showImageContainer }) => {

  return (
    <div className={styles.container}
    style={{backgroundColor: data.bg_color}}>
      <div className={styles.notifyContainer}>

        {showMainText && (
          <div className={styles.mainText}
          style={{color:data.title_text_color}}>
            <h1>{data.title}</h1>
          </div>
        )}

        {showMainPara && (
          <div className={styles.main_para}
          style={{color: data.main_para_text_color}}>
            <p>{data.main_para}</p>
          </div>
        )}

        {showSecondaryText && (
          <div className={styles.secondryText}
          style={{color: data.message_text_color}}>
            <p>{data.message}</p>
          </div>
        )}


        {showButton && <button className={styles.notifyBtn}
        style={{backgroundColor: data.btn_bg_color, color: data.btn_text_color}}>{data.buttonText}</button>}


        {showImageContainer && (
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Img src={data.imgURL1} />
            </div>
            <div className={styles.imageWrapper}>
              <Img src={data.imgURL2} />
            </div>
            <div className={styles.imageWrapper}>
              <Img src={data.imgURL3} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

NotifyMe.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    main_para:PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,

    buttonText: PropTypes.string.isRequired,
    btn_text_color: PropTypes.string.isRequired,
    btn_bg_color: PropTypes.string.isRequired,

    imgURL1: PropTypes.string,
    imgURL2: PropTypes.string,
    imgURL3: PropTypes.string,
  }).isRequired,
  showMainText: PropTypes.bool.isRequired,
  showMainPara: PropTypes.bool.isRequired,
  showSecondaryText: PropTypes.bool.isRequired,

  showButton: PropTypes.bool.isRequired,
  btn_text_color: PropTypes.bool.isRequired,
  btn_bg_color:PropTypes.bool.isRequired,

  showImageContainer: PropTypes.bool.isRequired,
};

export default NotifyMe;

// import React from "react";
// import PropTypes from "prop-types";
// import styles from "./index.module.css";
// import Img from "../../components/Image";

// const NotifyMe = ({ data }) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.notifyContainer}>
//         <div className={styles.mainText}>
//           <h1>{data.title}</h1>
//         </div>
//         <div className={styles.secondryText}>
//           <p>{data.message}</p>
//         </div>
//         <button className={styles.notifyBtn}>{data.buttonText}</button>

//         <div className={styles.imageContainer}>
//           <div className={styles.imageWrapper}>
//             <Img src={data.imgURL1} />
//           </div>
//           <div className={styles.imageWrapper}>
//             <Img src={data.imgURL2} />
//           </div>
//           <div className={styles.imageWrapper}>
//             <Img src={data.imgURL3} />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// NotifyMe.propTypes = {
//   title: PropTypes.string.isRequired,
//   message: PropTypes.string.isRequired,
//   buttonText: PropTypes.string.isRequired,
// };
// export default NotifyMe;
