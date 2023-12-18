// import React from "react";
// import PropTypes from "prop-types";
// import style from "./index.module.css";

// function Investment({ data }) {
//   return (
//     <div className={style.invest}>
//       <div className={style.investContainer}>
//         <div className={style.investNumberCont}>
//           <p className={style.investNumber}>{data.investors}</p>
//         </div>
//         <div className={style.investNameCont}>
//           <p className={style.investName}>{data.investorsName}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// Investment.propTypes = {
//   data: PropTypes.shape({
//     investors: PropTypes.string.isRequired,
//     investorsName: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Investment;

import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.css";

function Investment({ data }) {
  return (
    <div className={style.invest}>
      <div className={style.investContainer}>
        {data.map((item, index) => (
          <div key={index} className={style.investItem}>
            <p className={style.investNumber}>{item.investors}</p>
            <p className={style.investName}>{item.investorsName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Investment.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      investors: PropTypes.string.isRequired,
      investorsName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Investment;
