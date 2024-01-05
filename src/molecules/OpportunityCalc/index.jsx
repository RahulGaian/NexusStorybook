import React from "react";
import style from "./index.module.css";
import { useState } from "react";
const OpportunityCalc = () => {
  let data = ["South Dakota", "San Diego", "New York", "Washington DC"];
  const [clickedList, clickedListUpdate] = useState([]); 
  const [selectedList, selectedListUpdate] = useState([]);
  return (
    <div>
      <div className={style.inner}>
        <h1 className={style.heading}>Your Selected DMA</h1>
        <div className={style.cities}>
          {data.map((e) => {
                return (
              <div
                
                className={style.blues + " " + (selectedList.includes(e) ? style.clicked : "")}
                key={e}
                onClick={(eve) => {
                  eve.stopPropagation();
                  selectedListUpdate((arr) => {
                    return [...arr, e];
                  });    
                  
                }}
              >
                <h1 className={(selectedList.includes(e) ? style.clicked1 : "")}>{e}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OpportunityCalc;
