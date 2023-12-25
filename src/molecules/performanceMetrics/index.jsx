import React from "react";
import style from "./index.module.css";
import Img from "../../components/Image";

function PerformanceMetrics() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  // Function to update window width
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={style.performanceContainer}>
      <div className={style.performanceContentCont}>
        <div className={style.performanceTop}>
          <p>BORG Performance Metrics</p>
          <p>
            Deep-dive into the statistics of BORG and understand the mechanics
            of the SwissBorg ecosystem.
          </p>
        </div>
        <div className={style.performanceBottom}>
          {/* <Img
            src="./Images/performanceMetrics/banner.png"
            src="./Images/performanceMetrics/bannerMobile.png"
            className={style.performanceBottomImg}
          ></Img> */}
          {windowWidth < 600 ? (
            <Img
              src="./Images/performanceMetrics/bannerMobile.png"
              className={style.performanceBottomImg}
              alt="Mobile Banner"
            />
          ) : (
            <Img
              src="./Images/performanceMetrics/banner.png"
              className={style.performanceBottomImg}
              alt="Desktop Banner"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PerformanceMetrics;
