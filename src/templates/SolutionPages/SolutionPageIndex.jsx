import "./SolutionPageIndex.css";
import SolutionPageBanner from "../../components/solutionPageComponents/SolutionPageBanner/SolutionPageBanner";
import SolutionPageMenu from "../../components/solutionPageComponents/SolutionPageMenu/SolutionPageMenu";
import SolutionPagePS from "../../components/solutionPageComponents/SolutionPagePS/SolutionPagePS";
import SolutionPageCapabilities from "../../components/solutionPageComponents/SolutionPageCapabilities/SolutionPageCapabilities";
import SolutionPageCaseStudy from "../../components/solutionPageComponents/SolutionPageCaseStudy/SolutionPageCaseStudy";
import AppSwiper from "../../components/appSwiper";
import SolutionPageLike from "../../components/solutionPageComponents/SolutionPageLike/SolutionPageLike";
import SolutionPageSecurity from "../../components/solutionPageComponents/SolutionPageSecurity/SolutionPageSecurity";
import Blobs from "../../molecules/blobs";
const SolutionPageIndex = ({ solution }) => {
  // console.log(solution);
  return (
    <section
      className="solutionContainer"
 
    >
      <Blobs top={"-20px"}  left={"85%"}></Blobs>
      <Blobs top={"12%"} color="yellow" left={"-200px"} radius="900px"></Blobs>
      <Blobs top={"38%"}  color="yellow" left={"85%"}></Blobs>
      <Blobs top={"50%"} color="yellow" left={"-200px"}></Blobs>
      <Blobs top={"63%"}   left={"85%"}></Blobs>




      <SolutionPageBanner bannerData={solution.banner} />
      <SolutionPageMenu />
      <SolutionPagePS problemData={solution.problemStatement} />
      <SolutionPageCapabilities capabilitiesData={solution.capabilities} />
      <SolutionPageCaseStudy caseStudyData={solution.caseStudy} />
      <section id="products">
        <AppSwiper />
        <br />
        <br />
        <SolutionPageLike likeData={solution.youMayAlsoLike} />
      </section>
      <SolutionPageSecurity>
        heading={"Enterprise Grade Trust and Security"}
        content=
        {
          "Mobius Suite integrates with thousands of Apps, APIs, Content, IT & Infrastructure providers across various domains throughout the globe"
        }
        img={"/images/Security/8.png"}
      </SolutionPageSecurity>
    </section>
  );
};

export default SolutionPageIndex;
