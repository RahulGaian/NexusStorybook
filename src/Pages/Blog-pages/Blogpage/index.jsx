import React from "react";
import "./index.css";
import BlogSingle from "../Blogsinglepage";
// import images from "../../../constants/images";
function Blogmain() {
  const changeRoute = (Route) => {
    window.location.href = Route;
  };
  return (
    <>
      <div className="blogmain">
        <div className="pt4 maintitle paddingmain">
          <span className="head">Life @ </span>
          <span className="colorhead">Gaian</span>
        </div>
        <div className="pt4 topposts paddingmain">
          <div
            className="toppost1"
            onClick={() => {
              // changeRoute("careeropenings");
              changeRoute("blogsinglepage");
            }}
          >
            <div className="contenttop">
              <span>Beyond the Code :</span>
              <span>
                {" "}
                Emphasizing the Human Aspect in AI Development and Digital
                Transformation
              </span>
            </div>
          </div>

          <div className="toppost2">
            <div className="contenttop">
              <span>Future-Proof Your Organization :</span>{" "}
              <span>
                Cultivating a Culture of Learning and Innovation in the Age of
                AI
              </span>
            </div>
          </div>
        </div>
        <div className="pt4 bottomposts pb4 paddingmain">
          <div className="bottom1">
            <div className="btimg3">
              <div className="contenttop">
                <span> Building a More Inclusive Digital World :</span>
                <span> The Role of Universal Design </span>
              </div>
            </div>

            <div className="btimg4">
              <div className="content1">Behind the Scenes at Mobius</div>
            </div>
          </div>
          <div className="bottom2">
            <div className="bottom2main">
              <div className="content1">
                How AI Is Revolutionizing the broadcast industry in the USA
              </div>
            </div>
          </div>
        </div>

        <div className="pt4 newsletters">
          <div className="newscontent">
            <div className="newstitle pt2">
              Subscribe To our Newsletter{" "}
              <span className="colorblue">Innovation</span>
            </div>
            <div className="newsdesc pt2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi.
            </div>
            <div className="pt2">
              <button className="newsbtn">Subscribe Newsletter</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blogmain;
