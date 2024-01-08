// import React from "react";
// import style from "./index.module.css";

// const AdditionCmp = () => {
//   const fixed = 72;
//   const metered = 2;
//   const ad = 14;
//   const subscription = 16;
//   const data = 1;
//   const total = fixed + metered + ad + subscription + data;

//   return (
//     <div>
//       <div className={style.container}>
//         <div className={style.contentContainer}>
//           <div className={style.title}>
//             <h1>A business model with the right mix of CapEx and OpEx</h1>
//           </div>

//           <div className={style.mainContent}>
//             <div className={style.item}>
//               <p className={style.textStyling}>Fixed</p>

//               <div className={style.digitsAndSymbol}>
//                 <p className={style.numbers}>{`$${fixed}M`}</p>
//                 <p className={style.symbol}>+</p>
//               </div>
//             </div>
//             <div className={style.item}>
//               <p className={style.textStyling}>Metered</p>

//               <div className={style.digitsAndSymbol}>
//                 <p className={style.numbers}>{`$${metered}M`}</p>
//                 <p className={style.symbol}>+</p>
//               </div>
//             </div>
//             <div className={style.item}>
//               <p className={style.textStyling}>Ad Based</p>
//               <div className={style.digitsAndSymbol}>
//                 <p className={style.numbers}>{`$${ad}M`}</p>
//                 <p className={style.symbol}>+</p>
//               </div>
//             </div>
//             <div className={style.item}>
//               <p className={style.textStyling}>Subscription</p>
//               <div className={style.digitsAndSymbol}>
//                 <p className={style.numbers}>{`$${subscription}M`}</p>
//                 <p className={style.symbol}>+</p>
//               </div>
//             </div>
//             <div className={style.item}>
//               <p className={style.textStyling}>Data as Currency</p>
//               <div className={style.digitsAndSymbol}>
//                 <p className={style.numbers}>{`$${data}M`}</p>
//                 <p className={style.symbol}>=</p>
//               </div>
//             </div>
//             <div className={style.item}>
//               <p className={style.textTotal}>Total</p>
//               <p className={style.numbersTotal}>{`$${total}M`}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdditionCmp;

//====================================================================

//BY MAP METHOD, BUT IT IS NOT SHOWING = SYMBOL

// import React from "react";
// import style from "./index.module.css";

// const formatNumber = (value) => {
//   const billion = 1e9;
//   const million = 1e6;
//   const thousand = 1e3;

//   if (Math.abs(value) >= billion) {
//     return `${(value / billion).toFixed(value % billion !== 0 ? 1 : 0)}B`;
//   } else if (Math.abs(value) >= million) {
//     return `${(value / million).toFixed(value % million !== 0 ? 1 : 0)}M`;
//   } else if (Math.abs(value) >= thousand) {
//     return `${(value / thousand).toFixed(value % thousand !== 0 ? 1 : 0)}K`;
//   } else {
//     return value.toFixed(0);
//   }
// };

// const AdditionCmp = ({
//   fixed = 9000,
//   metered = 1000000,
//   ad = 10000000,
//   subscription = 9000000,
//   data = 1100000,
// }) => {
//   const total = fixed + metered + ad + subscription + data;

//   return (
//     <div>
//       <div className={style.container}>
//         <div className={style.contentContainer}>
//           <div className={style.title}>
//             <h1>A business model with the right mix of CapEx and OpEx</h1>
//           </div>

//           <div className={style.mainContent}>
//             {[
//               { name: "Fixed", value: fixed },
//               { name: "Metered", value: metered },
//               { name: "Ad Based", value: ad },
//               { name: "Subscription", value: subscription },
//               { name: "Data as Currency", value: data },
//             ].map((item, index) => (
//               <div className={style.item} key={index}>
//                 <p className={style.textStyling}>{item.name}</p>
//                 <div className={style.digitsAndSymbol}>
//                   <p className={style.numbers}>{`$${formatNumber(item.value)}`}</p>
//                   <p className={style.symbol}>+</p>
//                 </div>
//               </div>
//             ))}

//             <div className={style.item}>
//               <p className={style.textTotal}>Total</p>
//               <p className={style.numbersTotal}>{`$${formatNumber(total)}`}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdditionCmp;

//==============================================
import React from "react";
import style from "./index.module.css";

const formatNumber = (value) => {
  const billion = 1e9;
  const million = 1e6;
  const thousand = 1e3;

  if (Math.abs(value) >= billion) {
    return `${(value / billion).toFixed(value % billion !== 0 ? 1 : 0)}B`;
  } else if (Math.abs(value) >= million) {
    return `${(value / million).toFixed(value % million !== 0 ? 1 : 0)}M`;
  } else if (Math.abs(value) >= thousand) {
    return `${(value / thousand).toFixed(value % thousand !== 0 ? 1 : 0)}K`;
  } else {
    return value.toFixed(0);
  }
};

const AdditionCmp = ({
  fixed = 72000000,
  metered = 2000000,
  ad = 14000000,
  subscription = 16000000,
  data = 1000000,
}) => {
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
              <p className={style.textStyling}>Fixed</p>
              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${formatNumber(fixed)}`}</p>
                <p className={style.symbol}>+</p>
              </div>
            </div>

            <div className={style.item}>
              <p className={style.textStyling}>Metered</p>
              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${formatNumber(metered)}`}</p>
                <p className={style.symbol}>+</p>
              </div>
            </div>

            <div className={style.item}>
              <p className={style.textStyling}>Ad Based</p>
              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${formatNumber(ad)}`}</p>
                <p className={style.symbol}>+</p>
              </div>
            </div>

            <div className={style.item}>
              <p className={style.textStyling}>Subscription</p>
              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${formatNumber(subscription)}`}</p>
                <p className={style.symbol}>+</p>
              </div>
            </div>

            <div className={style.item}>
              <p className={style.textStyling}>Data as Currency</p>
              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${formatNumber(data)}`}</p>
                <p className={style.symbol}>=</p>
              </div>
            </div>

            <div className={style.item}>
              <p className={style.textTotal}>Total</p>
              <p className={style.numbersTotal}>{`$${formatNumber(total)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionCmp;



