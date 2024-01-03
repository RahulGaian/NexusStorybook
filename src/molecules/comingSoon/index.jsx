import React from "react";
import st from "./index.module.css";

const ComingSoon = () => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.bgImg}>
          <span id={st.head}>Coming Soon!</span>
          <span id={st.shead}>Something Awesome is Being Brewed here...</span>
          <span id={st.para}>
            Our team of brilliant minds are working tirelessly to bring you the
            most innovative and exciting Mobius experience. Stay tuned for a
            truly game-changing experience that will leave you speechless. The
            future is coming, and it's in our hands.
          </span>
          <button>Go to homepage</button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
