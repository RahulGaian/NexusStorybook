import "./SolutionPageLike.css";
import SolutionPageSecurity from "../SolutionPageSecurity/SolutionPageSecurity";

const SolutionPageLike = ({ likeData }) => {
    return (
      <div className="likeContainerSL" id="alsolike">
        <div className="likeContentContainerSL">
          <h2>You may also like..</h2>
          <h5>Related products to Mobius Smart City Solutions</h5>
          <div className="blockContainer">
            {likeData.map((item, index) => (
              <div key={index} className="likeprod">
                <div className="leftdiv">
                  <img src={item.imageUrl} alt="likeImg" />
                </div>
                <div className="rightdiv">
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default SolutionPageLike;
