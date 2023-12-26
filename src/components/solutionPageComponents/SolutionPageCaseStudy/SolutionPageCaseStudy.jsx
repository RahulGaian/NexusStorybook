import "./SolutionPageCaseStudy.css";

const SolutionPageCaseStudy = ({ caseStudyData }) => {
    // console.log(caseStudyData);
    return (
      <div className="caseStudyContainerCS">
        <div className="bgcolorCS">
          <div className="caseStudyContentContainerCS">
            <div className="leftdiv">
              <img src={caseStudyData.imageUrl} alt="caseStudyImg" className=""/>
            </div>
            <div className="rightdiv">
              <h2>{caseStudyData.heading}</h2>
              <p>{caseStudyData.description || caseStudyData.paragraph}</p>
              <button>Download Case Study</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default SolutionPageCaseStudy;
