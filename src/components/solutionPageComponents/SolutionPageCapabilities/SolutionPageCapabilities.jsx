import "./SolutionPageCapabilities.css";

const SolutionPageCapabilities = ({ capabilitiesData }) => {
  //   console.log(capabilitiesData);
  return (
    <div className="capcontainer" id="capabilities">
      <div className="capContentContainer bgbackCap">
        <h1>Capabilities</h1>
        <div className="itemcontainer">
          {capabilitiesData.map((item, index) => (
            <div key={index}>
              <div>
                <img src={item.imageUrl} alt="cimage" />
              </div>
              <div>
                <h2>{item.heading}</h2>
              </div>
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionPageCapabilities;
