import React from "react";
import style from "./index.module.css";

function Newsletter() {
  return (
    <div className={style.newsletterContainer}>
      <div className={style.newsletterContentContainer}>
        <div className={style.newsletterTop}>
          <img src="/Images/newsletter/addbtn.png" alt="addbtnimage" />
          <p>Proudly engineered in Switzerland</p>
        </div>
        <div className={style.newsletterBottom}>
          <div className={style.newsletterLeft}>
            <div className={style.newsletterLeftPara}>
              <p>Subscribe to our newsletter</p>
              <p>Receive official updates when you join our mailing list</p>
            </div>
            <div className={style.newsletterLeftInputCont}>
              <div className={style.newletterLeftInput}>
                <input placeholder="Name (required)" />
              </div>
              <div className={style.newsletterLeftInputBtn}>
                <input placeholder="Email (required)" />
                <button className={style.newletterLeftBtn}>
                  <img src="/Images/newsletter/arrow.png" alt="buttonimage" />
                </button>
              </div>
            </div>
          </div>
          <div className={style.newsletterRight}>
            <div className={style.newsletterRightPara}>
              <p>Be part of our growing global community</p>
              <p>Follow and subscribe to our channels</p>
            </div>
            <div className={style.newsletterRightSocial}>
              {/* Twitter */}
              <a href="https://twitter.com/Gaian_Solutions" target="_blank">
                <img src="/Images/newsletter/twitter.png" alt="twitterimage" />
              </a>
              {/* Github */}
              <img src="/Images/newsletter/github.png" alt="githubimage" />
              {/* Youtube */}
              <a href="https://www.youtube.com/@Gaiansolutions" target="_blank">
                <img src="/Images/newsletter/youtube.png" alt="youtubeimage" />
              </a>
              {/* Facebook */}
              <img src="/Images/newsletter/facebook.png" alt="facebookimage" />
              {/* Instagram */}
              <a
                href="https://www.instagram.com/gaiansolutions/"
                target="_blank"
              >
                <img
                  src="/Images/newsletter/instagram.png"
                  alt="instagramimage"
                />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/mobius-by-gaian/"
                target="_blank"
              >
                <img
                  src="/Images/newsletter/linkedin.png"
                  alt="linkedinimage"
                />
              </a>
              {/* Telegram */}
              <img src="/Images/newsletter/telegram.png" alt="telegramimage" />
              {/* Tiktok */}
              <img src="/Images/newsletter/tiktok.png" alt="tiktokimage" />
              {/* Message */}
              <img src="/Images/newsletter/message.png" alt="messageimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

// -----------------------------------------------------------------
// import React from "react";
// import style from "./index.module.css";

// function Newsletter() {
//   return (
//     <div className={style.newsletterContainer}>
//       <div className={style.newsletterContentContainer}>
//         <div className={style.newsletterTop}>
//           <img src="/Images/newsletter/addbtn.png" alt="addbtnimage" />
//           <p>Proudly engineered in Switzerland</p>
//         </div>
//         <div className={style.newsletterBottom}>
//           <div className={style.newsletterLeft}>
//             <div className={style.newsletterLeftPara}>
//               <p>Subscribe to our newsletter</p>
//               <p>Receive official updates when you join our mailing list</p>
//             </div>
//             <div className={style.newsletterLeftInputCont}>
//               <div className={style.newletterLeftInput}>
//                 <input placeholder="Name (required)" />
//                 <input placeholder="Email (required)" />
//               </div>
//               <button className={style.newletterLeftBtn}>
//                 <img src="/Images/newsletter/arrow.png" alt="buttonimage" />
//               </button>
//             </div>
//           </div>
//           <div className={style.newsletterRight}>
//             <div className={style.newsletterRightPara}>
//               <p>Be part of our growing global community</p>
//               <p>Follow and subscribe to our channels</p>
//             </div>
//             <div className={style.newsletterRightSocial}>
//               {/* Twitter */}
//               <a href="https://twitter.com/Gaian_Solutions" target="_blank">
//                 <img src="/Images/newsletter/twitter.png" alt="twitterimage" />
//               </a>
//               {/* Github */}
//               <img src="/Images/newsletter/github.png" alt="githubimage" />
//               {/* Youtube */}
//               <a href="https://www.youtube.com/@Gaiansolutions" target="_blank">
//                 <img src="/Images/newsletter/youtube.png" alt="youtubeimage" />
//               </a>
//               {/* Facebook */}
//               <img src="/Images/newsletter/facebook.png" alt="facebookimage" />
//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/gaiansolutions/"
//                 target="_blank"
//               >
//                 <img
//                   src="/Images/newsletter/instagram.png"
//                   alt="instagramimage"
//                 />
//               </a>
//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/company/mobius-by-gaian/"
//                 target="_blank"
//               >
//                 <img
//                   src="/Images/newsletter/linkedin.png"
//                   alt="linkedinimage"
//                 />
//               </a>
//               {/* Telegram */}
//               <img src="/Images/newsletter/telegram.png" alt="telegramimage" />
//               {/* Tiktok */}
//               <img src="/Images/newsletter/tiktok.png" alt="tiktokimage" />
//               {/* Message */}
//               <img src="/Images/newsletter/message.png" alt="messageimage" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Newsletter;
