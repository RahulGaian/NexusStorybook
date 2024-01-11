import "./SolutionPageBanner.css";

import { useState, useEffect } from "react";

const SolutionPageBanner = ({ bannerData }) => {
  // //console.log(bannerData);
  const changeRoute = (Route) => {
    window.location.href = Route;
  };
  const [getstartedroute, setgetstartedroute] = useState("/contactus");
  useEffect(() => {
    if (window.location.pathname === "/solutions/NextGenTV") {
      setgetstartedroute("/marketplace/NextGenTV");
    }
  }, []);
  return (
    <div className="bannerContainerSolution">
      <div className="bannerContentContainerSolution">
        <div id="bg_headingsolution" className="leftcont">
          <h1>{bannerData.heading}</h1>
          <p>{bannerData.description}</p>
          <button
            onClick={() => {
              window.open(
                "https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7",
                ""
              );
            }}
          >
            Book a demo
          </button>
        </div>
        <div className="rightcont">
          <img src={bannerData.imageUrl} alt="Banner Img" />
        </div>
      </div>
    </div>
  );
};

export default SolutionPageBanner;
