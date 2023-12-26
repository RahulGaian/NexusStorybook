import React from "react";
import "./platform.css";
import "./platformResponsive.css";

const Platform_banner = ({ id, bannerData, classname }) => {
  return (
    <div className="bannerContainer">
      <div className="bg_subheading">
        <div className="design"></div>
        {/* <li className='pathDescriptionContainer'>
        {`Home / Platform / ${bannerData.heading}`}
        </li> */}

        <div id="bg_heading" className="bannerContentContainer">
          <h1>{bannerData.heading}</h1>

          <div className="bannerContentWrapper">
            <div className="bannerContent">
              {/* <div className='bg_subheading'>shfkasklf;ja</div> */}
              <h1>{bannerData.subheading}</h1>
              <p>{bannerData.description}</p>
              <div className="bannerContentBtn">
                <button
                  id="getStartedBtn"
                  onClick={() => {
                    window.location.href = "/comingsoon";
                  }}
                >
                  Join Us Now
                </button>
                <button
                  id="learnMoreBtn"
                  style={{ visibility: "hidden" }}
                  onClick={() => {
                    window.location.href = "/NextGenTV_Webinar";
                  }}
                >
                  Register For Webinar <span>&#8594;</span>
                </button>
              </div>
            </div>
            <div className={classname ? classname : "bannerContentImage"}>
              <img src={bannerData.imageUrl} alt="Banner Img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform_banner;
