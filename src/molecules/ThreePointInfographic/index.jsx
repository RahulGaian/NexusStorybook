import React from "react";
import style from "./index.module.css";
import Img from "../../components/Image";

function ThreeInfographic() {
  return (
    <div className={style.infographicContainer}>
      <div className={style.infographicContentContainer}>
        <div className={style.infographicLeft}>
          <Img src="./Images/threePointInfographic/infoImg.png"></Img>
        </div>
        {/* <div className={style.infographicRightCont}> */}
        <div className={style.infographicRight}>
          <h1 className={style.infographicRightHeader}>How it works</h1>
          {/* 1st  */}
          <div className={style.infographicRightContents}>
            <div className={style.infographicRightSubheader}>
              <p>1</p>
              <h6>Share your invitation link</h6>
            </div>
            <div className={style.infographicRightDesc}>
              <p>
                Open the Rewards Tab in the SwissBorg app and share your unique
                rewards link.
              </p>
            </div>
          </div>
          {/* 2 nd */}
          <div className={style.infographicRightContents}>
            <div className={style.infographicRightSubheader}>
              <p>2</p>
              <h6>Your friend makes a deposit</h6>
            </div>
            <div className={style.infographicRightDesc}>
              <p>
                Your friends need to download the SwissBorg app and make a
                deposit of €50 or more (or equivalent in their currency).
              </p>
            </div>
          </div>
          {/* 3 rd */}
          <div className={style.infographicRightContents}>
            <div className={style.infographicRightSubheader}>
              <p>3</p>
              <h6>Receive a ticket and claim your reward</h6>
            </div>
            <div className={style.infographicRightDesc}>
              <p>
                You and your friend will both receive a Rewards Ticket. Scratch
                your ticket to reveal your BORG prize, and then keep sharing to
                earn more tickets!
              </p>
            </div>
          </div>
          <div className={style.infographicFooter}>
            <p>
              *Find more information related to our Rewards Program{" "}
              <span>here.</span>
              <br />
              Available in the following {""}
              <span>countries.</span>
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ThreeInfographic;
