import React from "react";
import style from "./index.module.css";

function Pagination() {
  return (
    <div className={style.paginationContainer}>
      <div className={style.paginationContentContainer}>
        <div className={style.paginationTop}>
          <div className={style.paginationTopHeader}>
            <h1>BORG Buyback</h1>
          </div>
          <div className={style.paginationTopDesc}>
            <p>
              BORG Buyback uses a percentage of the fees earned by the SwissBorg
              Earn program to periodically buy back BORG.
            </p>
          </div>
        </div>
        <div className={style.paginationMiddle}>
          <div className={style.paginationMiddleCont}>
            <div className={style.paginationMiddleContLeft}></div>
            <div className={style.paginationMiddleContRight}></div>
          </div>
        </div>
        <div className={style.paginationBottom}></div>
      </div>
    </div>
  );
}

export default Pagination;
