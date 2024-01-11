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

function CesPage() {
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
        <div className={style.where}>
          <WhereToFind />
        </div>
      </section>
      {/* <section>
        <HeadAndText data={secondHeadingData.secondHeading2} />
      </section> */}
      {/* <section>
        <Communities data={communitiesData.community1} />
      </section> */}
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
