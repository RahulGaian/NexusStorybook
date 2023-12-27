import React from 'react'

// import AIAgent from "../../../images/platform/PascalIntelligence//AIAgent.png"
// import RealTimeAnalysis from  "../../../images/platform/PascalIntelligence/RealTimeAnalysis.png"
// import OnlineAnalytical from "../../../images/platform/PascalIntelligence/DataAnalysis.png"
// import BannerReactangle from "images/platform/PascalIntelligence/Rectangle 4067.svg"
import Img from '../../Image'
import "./benefits.css"
import "./responsiveBenefits.css"
// import ProductExp from '../../ProductEndExplaner'
const Benefits = ({ benefitsData }) => {
  return (
    <div>
      <section className='benefitsContainer '>
        <div className='decoratorb-1'></div>
        <div className='decoratorb-2'></div>

        <div className='benefitsBoxHeading'>

          <h1 >Benefits</h1>
        </div>
        
        <div className='benefitsCardsContainer'>
          {benefitsData.map(benefit => (
            <div className='benefitsCardWrapper'>
              <img src={benefit.imageUrl} alt="AI logo" />
              <div className='benfitsDetails'>
                <h1 >{benefit.heading}</h1>
              </div>
              <div className='benfitsDetails'>
                <p>{benefit.description || benefit.paragraph}</p>
              </div>
            </div>
          ))}
        </div>

{/* 

        <section className='benefitsBanner bg_color_01'>
          <div className='bannerImageContainer'>
            <Img className="bgimg" src={"/images/platform/PascalIntelligence/Rectangle 4067.svg"} />
          </div>
          <div className='benefitsBannerDetails'>
            <h1>
              Case Study: Revolutionizing Marketing Automation with PI-Pascal Intelligence
            </h1>
            <p>
              PI-Pascal Intelligence revolutionized marketing automation by providing clients with the tools to overcome their toughest challenges. With the help of PI-Pascal Intelligence, clients were able to take their marketing strategies to the next level.
            </p>
            <button id='casestudy_button'>
              Download Case Study
            </button>
          </div>
        </section> */}
        <section className=''>
          {/* <div className='adBannerWrapper'> */}


          {/* </div> */}
        </section>
      </section>
    </div>
  )
}

export default Benefits