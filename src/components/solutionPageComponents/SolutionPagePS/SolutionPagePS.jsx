import "./SolutionPagePS.css";

const SolutionPagePS = ({ problemData }) => {
  // console.log(problemData);
  return (
    <div className="psContainer" id="statement">
      <div className="bgimgPS">
        <div className="psContentContainer">
          <div className="leftcont">
            <img src={problemData.imageUrl} alt="psimg" />
          </div>
          <div className="rightcont">
            <h1>{problemData.heading}</h1>
            <p>{problemData.description}</p>
            <button>Speak to an Expert</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPagePS;
