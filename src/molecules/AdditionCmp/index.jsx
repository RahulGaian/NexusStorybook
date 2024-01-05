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
              {/* <div className={style.para}> */}
                <p className={style.textStyling}>Fixed</p>
              {/* </div> */}

              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${fixed}M`}</p>
                <p className={style.symbol}>+</p>
              </div>
            </div>

            <div className={style.item}>
              <p className={style.textStyling}>Metered</p>

              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${metered}M`}</p>
                <p className={style.symbol}>+</p>
              </div>
            </div>
            <div className={style.item}>
              <p className={style.textStyling}>Ad Based</p>
              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${ad}M`}</p>
                <p className={style.symbol}>+</p>
              </div>
            </div>
            <div className={style.item}>
              <p className={style.textStyling}>Subscription</p>
              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${subscription}M`}</p>
                <p className={style.symbol}>+</p>
              </div>
            </div>
            <div className={style.item}>
              <p className={style.textStyling}>Data as Currency</p>
              <div className={style.digitsAndSymbol}>
                <p className={style.numbers}>{`$${data}M`}</p>
                <p className={style.symbol}>=</p>
              </div>
            </div>
            <div className={style.item}>
              <p className={style.textTotal}>Total</p>
              <p className={style.numbersTotal}>{`$${total}M`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionCmp;
