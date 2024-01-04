import React from "react";
import style from "./index.module.css";

const AdditionCmp = () => {
  const fixed = 72;
  const metered = 2;
  const ad = 14;
  const subscription = 16;
  const data = 1;
  const total = fixed + metered + ad + subscription + data;

  return (
    <div>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.title}>
            <h1>A business model with the right mix of CapEx and OpEx</h1>
          </div>

          <div className={style.mainContent}>
            <div className={style.item}>
              <p>Fixed</p>
              <div className={style.digitsAndSymbol}>
                <p>{`$${fixed}M`}</p>
                <p>+</p>
              </div>
            </div>
            <div className={style.item}>
              <p>Metered</p>
              <div className={style.digitsAndSymbol}>
                <div><p>{`$${metered}M`}</p></div>
                <div><p>+</p></div>
              </div>
            </div>
            <div className={style.item}>
              <p>Ad Based</p>
              <div className={style.digitsAndSymbol}>
                <p>{`$${ad}M`}</p>
                <p>+</p>
              </div>
            </div>
            <div className={style.item}>
              <p>Subscription</p>
              <div className={style.digitsAndSymbol}>
                <p>{`$${subscription}M`}</p>
                <p>+</p>
              </div>
            </div>
            <div className={style.item}>
              <p>Data as Currency</p>
              <div className={style.digitsAndSymbol}>
                <p>{`$${data}M`}</p>
                <p>=</p>
              </div>
            </div>
            <div className={style.item}>
              <p>Total</p>
              <p>{`$${total}M`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionCmp;

// // index.jsx
// import React from "react";
// import style from "./index.module.css";
// import { InvestmentData } from "./data";

// const AdditionCmp = () => {

//   return (
//     <div>
//       <div className={style.container}>
//         <div className={style.contentContainer}>

//           <div className={style.title}>
//             <h1>A business model with the right mix of CapEx and OpEx</h1>
//           </div>

//           <div className={style.mainContent}>
//             <div className={style.investContainer}>
//               {InvestmentData.investmentOne.map((investment, index) => (
//                 <div key={index} className={style.investContentCont}>
//                   <p className={style.investName}>{investment.investorsName}</p>
//                   <p className={style.investNumber}>{investment.investors}</p>
//                   <p className={style.investName}>+</p>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdditionCmp;
