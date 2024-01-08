import React from "react";
import Img from "../../../components/Image";
import st from "./index.module.css";

const Features = () => {
  return (
    <div>
      <div className={st.parent_features}>
        <div className={st.productContentCardWrapper}>
          <div className={st.productContentCard }>
            <div className={st.productContentCardImage}>
              <Img
                src={"/Images/landing/comp-wifi.png"}
                alt="comp-wifi img"
              />
            </div>
            <div className={st.productContentCardDesc}>
              <h1>Discover a World of NextGenTV Experiences</h1>
              <p>
                With Nexus Connect, viewers can explore a vast array of
                innovative applications tailored for the NextGenTV platform.
                From interactive content and enhanced viewing experiences to
                personalized recommendations and immersive storytelling, our
                marketplace brings cutting-edge applications at your fingertips.{" "}
              </p>
            </div>
          </div>

          <div className={st.productContentCard}>
            <div className={st.productContentCardImage}>
              <Img
                src={"/Images/landing/comp-tower.png"}
                alt="comp-tower img"
              />
            </div>
            <div className={st.productContentCardDesc}>
              <h1>Monetize Your NextGenTV Offerings</h1>
              <p>
                At Nexus Connect, we believe in empowering content
                creators and application developers to monetize their offerings.
                Our platform offers a variety of monetization models, including
                advertising, subscriptions, and in-app purchases, giving you the
                flexibility to choose the approach that aligns with your
                business goals. Benefit from our revenue-sharing mechanism and
                tap into the growing market of NextGenTV viewers to generate
                revenue from your innovative applications.
              </p>
            </div>
          </div>

          <div className={st.productContentCard}>
            <div className={st.productContentCardImage}>
              <Img
                src={"/Images/landing/computer-img.png"}
                alt="computer-img"
              />
            </div>
            <div className={st.productContentCardDesc}>
              <h1>Drive User Engagement and Optimize Performance</h1>
              <p>
                With Nexus Connect, viewers can explore a vast array of
                innovative applications tailored for the NextGenTV platform.
                From interactive content and enhanced viewing experiences to
                personalized recommendations and immersive storytelling, our
                marketplace brings cutting-edge applications at your fingertips.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
