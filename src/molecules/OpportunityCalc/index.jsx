import React from 'react'
import style from "./index.module.css"
import { useState } from 'react'
const OpportunityCalc = () => {
    let data = [ "South Dakota", "San Diego", "New York", "Washington DC"]
    // const [s]
  return (
    <div>
        <div className={style.inner}>
            <h1 className={style.heading}>
            Your Selected DMA
            </h1>
            <div className={style.cities}>

                {data.map(e=>{
                    return(
                        <div className={style.blues} onClick={()=>{selectedList.push(e);console.log(selectedList)}}>
                            <h1>{e}</h1>
                        </div>
                    )
                })}
      
            </div>
        </div>
    </div>
  )
}

export default OpportunityCalc;