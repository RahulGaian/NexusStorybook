import React from "react";
import AppSwiper from "../../appSwiper/index";
// import mid_image from "../../../images/products/mid_file.png";

import ProductExp from "../../ProductEndExplaner";
import Features from "../../platfrom-components/features/Features";
import Benefits from "../../platfrom-components/benefits/Benefits";
import SolutionPageCaseStudy from "../../solutionPageComponents/SolutionPageCaseStudy/SolutionPageCaseStudy";
import SolutionPageBanner from "../../solutionPageComponents/SolutionPageBanner/SolutionPageBanner";
// import DatabaseCloudServer from "../../../images/platform/PascalIntelligence/Database Cloud Server Connectivity and Analytics.svg"
// import Database from "../../../images/products/Database.svg"
// import DatabaseStorageNetwork from "../../../images/products/22.svg"
// import DatabaseStack from "../../../images/products/23.svg"

// import CustomerInsigts from "../../../images/products/24.svg"
// import CustomerExperience from "../../../images/products/13.svg"
// import PersonalDatabase from "../../../images/products/Personal Database.svg"
// import CustomerService from "../../../images/products/25.png"

// import ScrollproductContext from '../../../pages/products/scrollcontext/productscroll';

import "./productContent.css";

const productContent = ({ data }) => {
  const style1 = {
    display: "block",
    position: "relative",
    top: -80,
    visibility: "hidden",
  };

  const features = data.features;
  
  const benefits = data.benefits;
  const cases = data.case_study;
  // console.log(features, benefits, cases);
  // const { scrollToComponent } = useContext(ScrollproductContext);
  return (
    <div className="productContentContainer">
      <div id="bg_blue_color_1">
        <div id="bg_pink_color_2">
          <div id="bg_pink_color_1">
            <div id="bg_blue_color_2">
            <div className="productContentBanner">
                <div className="productContentSubBanner">
                  <span className="global_paragraph">
                    {" "}
                    <a
                      href="#feat"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Features
                    </a>
                  </span>
                  <span className="global_paragraph">
                    <a
                      href="#ben"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Benefits
                    </a>
                  </span>
                  <span className="global_paragraph">
                    <a
                      href="#desc"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Case Study
                    </a>
                  </span>
                  <span className="global_paragraph">
                    <a
                      href="#products"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Related Products
                    </a>
                  </span>
                </div>
                <img src={data.banner.viewDemoUrl} alt="mid_image" />
              </div>
              <Features featureData={features} />
              <br />
              <Benefits benefitsData={benefits}></Benefits>
              <br />
              <br />
              <SolutionPageCaseStudy caseStudyData={cases}></SolutionPageCaseStudy>   
              <AppSwiper />

              <ProductExp
                heading="Unlock Full Potential of your Data"
                content={
                  "Get in touch with our team to explore use cases with Pascal Intelligence for your business"
                }
                btn="Learn More"
              ></ProductExp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productContent;
