import React from 'react'
import PlatformBanner from  "../../components/platfrom-components/platform-banner/platform-banner"
import Features from '../../components/platfrom-components/features/Features'
import Benefits from '../../components/platfrom-components/benefits/Benefits'
import SeeAlso from '../../components/platfrom-components/seeAlso/SeeAlso'
import Blobs from '../../molecules/blobs'
import ProductExp from '../../components/ProductEndExplaner'
import SolutionPageCaseStudy from '../../components/solutionPageComponents/SolutionPageCaseStudy/SolutionPageCaseStudy'
import "./platfrom.css"

const PlatfromIndex = ({platform}) => {
  console.log(platform)
  let caseStudy = {imageUrl:"/aidtaasImages/images/imagesnew/Nightingale/N9.png",
              heading:"Case Study: Revolutionizing Marketing Automation with PI-Pascal Intelligence",
              description:"              PI-Pascal Intelligence revolutionized marketing automation by providing clients with the tools to overcome their toughest challenges. With the help of PI-Pascal Intelligence, clients were able to take their marketing strategies to the next level."
      }
  return (
    
    <section className='platformContainer' >
       <Blobs top={"-200px"} left={"85%"}></Blobs>
      <Blobs top={"20%"} color="yellow" left={"-200px"}></Blobs>
      <Blobs top={"38%"}  color="yellow" left={"85%"}></Blobs>
      <Blobs top={"50%"} color="yellow" left={"-200px"}></Blobs>
      <Blobs top={"63%"}   left={"85%"}></Blobs>

      <PlatformBanner bannerData={platform.banner}/>
      <Features featureData={platform.features}/>
      <Benefits benefitsData={platform.benefits}/>
      <br />
      <SolutionPageCaseStudy caseStudyData={caseStudy} ></SolutionPageCaseStudy>
      <ProductExp
            heading={"Unlock Full Potential of your Data"}
            content={"Get in touch with our team to explore use cases with"}
            btn={"Contact Us"}
          ></ProductExp>
      <SeeAlso  name={platform.SeeAlso.name} desc={platform.SeeAlso.desc} link={platform.SeeAlso.link}/> 
    </section>
  )
}

export default PlatfromIndex;