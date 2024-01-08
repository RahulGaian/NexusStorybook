import React from "react";
import style from "./index.module.css";
import Img from "../../components/Image/index";
import { useState } from "react";
const OpportunityCalc = ({data = ["South Dakota", "San Diego", "New York", "Washington DC"],listUpdater,selectedApps,selectedAppsUpdate}) => {
  let apps = ["aegis","around",'amply',"clink","gofema","impressio","iZak","museo","reee","voteiq"]
  return (
    <div>
      <div className={style.inner}>
        <h1 className={style.heading}>Your Selected DMA</h1>
        <div className={style.cities}>
          {data.map((e) => {
            return (
              <div
                className={
                  style.blues 
                }
                key={e}
         
              >
                <h1 onClick={() => {}}>
                  {e}
                </h1>
                <Img
                  className={style.clickedcl} 
                  src={"/Icons/cross.svg"}
                  onClick={() => {
                    listUpdater((arr) => {
                      return arr.filter((str) => str !== e);
                    });
                    // console.log("clicked close")
                  }}
                />

        
              </div>
            );
          })}
          {data.length==0 && <p style={{fontWeight:100,color:"grey"}}>You have not selected a DMA</p>}
        </div>
        <div className={style.secondheading}>
        <h1 className={style.heading2}>Business opportunities recommended for you 
        <span> <Img src={"/Icons/ticket.svg"}></Img></span></h1>
      
        </div>

        <div className={style.apps}>
        {apps.map((e) => {
            return (
              <div
                className={
                  style.back+
                  " " +
                  (selectedApps.includes(e) ? style.clickedapp : "")
                }
                key={e}
                onClick={() => {
                  if(selectedApps.includes(e)){
                    selectedAppsUpdate((arr) => {
                      return arr.filter((str) => str !== e);
                    });
                  }
                  else{

                    selectedAppsUpdate((arr) => {
                      return [...arr, e];
                    });
                  }
                }}
         
              >
                <Img  src={"/Icons/"+e+".svg"} >
                  {e}
                </Img>
        
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default OpportunityCalc;
