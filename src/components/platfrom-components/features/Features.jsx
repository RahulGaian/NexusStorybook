import React from 'react';
// import AppSwiper from '../../appSwiper';
import SolutionPageCaseStudy from '../../solutionPageComponents/SolutionPageCaseStudy/SolutionPageCaseStudy';

// import DownloadCaseStudy from '../../Modal/CaseStudyButton';
// import DataBaseCloud from "../../../images/platform/PascalIntelligence/IngestData.png"
// import DatabaseLaptop from "../../../images/platform/PascalIntelligence/LargeData.png"
// import Database from "../../../images/platform/PascalIntelligence/GroupDataInRealTime.png"
import "./Features.css"
import "./responsiveFeatures.css"

const Features = ({ incld, heading, subheading, description, featureData, appDescription, casestudy }) => {
   let caseStudyMp = casestudy;
   return (
      <div className='featureContainer'>
         {/* <div className='decorator-1'></div> */}
         {/* <div className='decorator-2'></div> */}
         {/* <div className='decorator-3'></div> */}
         {/* <div className='decorator-4'></div> */}

         {
            !incld ?
               <div className='featureBoxHeadingplt'>
                  <h1 >Features</h1>
               </div>
               :
               <>
                  <div className='featureBoxHeading'>
                     <h1 >{heading}</h1>
                  </div>
                  <div className='featureBoxSubHeading'>
                     <p >{subheading}</p>
                  </div>
                  <div className='featureBoxDescription'>
                     <p >{description}</p>
                  </div>
               </>
         }

         <div className='cardsContainer'>
            {featureData.map((feature, idx) => (
               <div className='cardWrapper' key={idx}>
                  <div className='cardImgContainer'>
                     <img src={feature.imageUrl} alt="DataBaseCloudimage" />
                  </div>
                  <div className='cardDetailContainer'>
                     <h1>{feature.heading}</h1>
                     <p>{feature.description || feature.paragraph}</p>
                  </div>
               </div>
            ))}
         </div>

         {
            incld &&
            <div className="app_description">
               {appDescription}
            </div>
         }

         {
            incld &&
            <SolutionPageCaseStudy caseStudyData={caseStudyMp} />
         }


      </div>
   )
}

export default Features;