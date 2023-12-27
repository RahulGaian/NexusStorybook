import "./SolutionPageSecurity.css";
import Img from "../../Image";
import { useState, useEffect } from "react";

const SolutionPageSecurity = ({ heading, content, img }) => {
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
      <div className="secContainerSP1" id="resources">
        <div className="secContentContainerSP">
          <div className="leftdiv">
            <h1>Get in touch with our Certified Solutions Expert</h1>
            <h5>Get expert assistance on Custom Solutions and Enquiries</h5>
            <button onClick={()=>{changeRoute(getstartedroute)}} >Book a Call</button>
          </div>
        </div>
          <div className="rightdiv">
            <Img id="imagesec" src={"/aidtaasImages/images/images/Security/8.png"}></Img>
          </div>
      </div>
    );
  };

export default SolutionPageSecurity;