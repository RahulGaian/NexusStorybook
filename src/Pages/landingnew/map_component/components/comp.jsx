import "./comp.css";

const Nexus = () => {
  return (
    <div className="map__container">
      <div className="bg1">
        <div className="bg2">
          <div className="contentContainer">
            <div className="topcont">
              <img src={require("./Group 615.png")} alt="" />
              <div className="btmbar">
                <div className="barctn1">
                  <ul>
                    <li>Potential Nexus Connect Station</li>
                  </ul>
                </div>
                <div className="barctn2">
                  <ul>
                    <li>Nexus Connect Station</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottomcont">
              <div className="item">
                <h1>300</h1>
                <h5>Stations</h5>
              </div>
              <div className="item">
                <h1>39+</h1>
                <h5>States</h5>
              </div>
              <div className="item">
                <h1>100M</h1>
                <h5>People</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nexus;
