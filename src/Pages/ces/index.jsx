import style from "./index.module.css";
import React from "react";
import CesBanner from "../../molecules/amzBanner/index";
import HeadAndText from "../../molecules/amzHead&Text";
import { secondHeadingData } from "../../molecules/amzHead&Text/data";
import WhereToFind from "../../molecules/whereToFind";
import Communities from "../../molecules/amzCommunities";
import { communitiesData } from "../../molecules/amzCommunities/data";
import StartBuilding from "../../molecules/amzStartBuilding";
import Blobs from "../../molecules/blobs/index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";

function CesPage() {
  let navigate = useNavigate();
  const refs = useRef();
  useEffect(()=>{
    // setTimeout(()=>{navigate("/CES#where")},1000)
    window.scrollTo()
    let offsetTop = refs.current.offsetTop -100;
    console.log(offsetTop)
    setTimeout(()=>{
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
    },1000)
  })
  return (
    <section>
      <Blobs top={"40%"} color="yellow" left={"-220px"}></Blobs>
      <Blobs top={"60%"} color="yellow" left={"80%"}></Blobs>
      <section>
        <CesBanner />
      </section>
      <section>
        <HeadAndText data={secondHeadingData.secondHeading} />
      </section>
      <section className={style.whereToFind}>
        <div className={style.where} id="where" ref={refs}> 
          <WhereToFind />
        </div>
      </section>
      <section>
        <HeadAndText data={secondHeadingData.secondHeading2} />
      </section>
      <section>
        <Communities data={communitiesData.community1} />
      </section>
      <section>
        <StartBuilding />
      </section>
      <br />
      <br />
      <br />
    </section>
  );
}

export default CesPage;
