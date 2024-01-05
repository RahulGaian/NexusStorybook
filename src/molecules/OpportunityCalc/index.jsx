import React from "react";
import style from "./index.module.css";
import Img from "../../components/Image/index";
import { useState } from "react";
const OpportunityCalc = () => {
  let data = ["South Dakota", "San Diego", "New York", "Washington DC"];
  let apps = ["aegis.svg","around.svg",'amply.svg',"clink.svg","gofema.svg","impressio.svg","izak.svg","museo.svg","reee.svg","voteiq.svg"]
  const [selectedApps, selectedAppsUpdate] = useState([]);
  const [selectedList, selectedListUpdate] = useState([]);
  return (
    <div>
      <div className={style.inner}>
        <h1 className={style.heading}>Your Selected DMA</h1>
        <div className={style.cities}>
          {data.map((e) => {
            return (
              <div
                className={
                  style.blues +
                  " " +
                  (selectedList.includes(e) ? style.clicked : "")
                }
                key={e}
         
              >
                <h1 className={selectedList.includes(e) ? style.clicked1 : ""} onClick={() => {
                  if(selectedList.includes(e)){
                    selectedListUpdate((arr) => {
                      return arr.filter((str) => str !== e);
                    });
                  }
                  else{

                    selectedListUpdate((arr) => {
                      return [...arr, e];
                    });
                  }
                }}>
                  {e}
                </h1>
        
              </div>
            );
          })}
        </div>
        <div className={style.secondheading}>
        <h1 className={style.heading2}>Business opportunities recommended for you <span>    <Img src={"/Icons/ticket.svg"}></Img></span></h1>
      
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
                <Img  src={"/Icons/"+e} >
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
