import React from "react";

// import RightArrow from "../../../images/products/rightArrowGrey.svg"

import "./productBanner.css";
// import heroheader from "../../../images/products/heroheader.svg"
// import rightArr from "../../../images/products/rightArrowGrey.svg"


const productBanner = ({ data }) => {
  const changeRoute = (Route) => {
    window.location.href = Route;
  };
  return (

    <>
      <div className="productBanner">
      <div className='decoratorpb-b bpos-2'></div>
      <div className='decoratorpb-p bpos-3'></div>
        <div id="bg_pink_blob_2">
          <div id="bg_blue_blob_1">
            <div className="Product_banner_Content_Container">
              <div id="bg_pink_blob_1">
                <div className="product_banner_content_wrapper">
                  <div className="productBannerLeft">
                    <div className="productBannerLeftContent">
                      <h1 className="global_heading">{data.heading}</h1>
                      <p className="global_paragraph">{data.paragraph}</p>

                      <div className="productBannerLeftButton">
                        <button
                          style={{ zIndex: 100 }}
                          onClick={() => {
                            changeRoute("/Contactus");
                          }}
                        >
                          Book a Demo
                        </button>
                        {/* <div>

            <span>View Demo</span>
            <img src={rightArr} alt="image1" />
          </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="productBannerRight">
                    <img src={data.imageUrl} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};


export default productBanner;
