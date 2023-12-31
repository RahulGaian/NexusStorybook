import "./index.css";
import Button from "../buttons";
let ProductExp = ({ heading, content, btn }) => {
  return (
    <section className="pre">
      <div className="pre-con">
        <div>
          <div>
            <h1 className="pre-heading">{heading}</h1>
          </div>
          <div>
            <h1 className="pre-content">{content} </h1>
          </div>
          <div>
            {" "}
            <Button
              text={btn}
              filled={true}
              url={"/platform/pascal-intelligence"}
              className="buttonbottom"
             
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductExp;
