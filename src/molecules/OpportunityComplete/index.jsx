import React from 'react'
import LeafletCanvasMap from '../leafLet'
import OpportunityCalc from '../OpportunityCalc'
import Projection from '../projection'
import style from "./index.module.css"
import { useState } from 'react'
import Cookies from 'js-cookie';
import { useEffect } from 'react'
import AdditionCmp from '../AdditionCmp'
const FullOppurtunity = () => {
    const [selectedStates,setSelectedStates] = useState([]);
    const [selectedApps,setSelectedApps] = useState([]);
    const initialCount = parseInt(Cookies.get('count')) || 0;
    const [additionalData,setAdditionalData] = useState({})
    const [count,setCount] = useState(initialCount);
    // console.log(selectedApps,selectedStates)
    useEffect(() => {
      Cookies.set('count', count.toString(), { expires: 7, path: '/' });
    }, [count]);
  
  return (
    <section className={style.leaflet}>
        <section className={style.map}><LeafletCanvasMap stateList={selectedStates} listUpdater={setSelectedStates}></LeafletCanvasMap></section>
        <section> <OpportunityCalc data={selectedStates} listUpdater={setSelectedStates} selectedApps={selectedApps} selectedAppsUpdate={setSelectedApps}></OpportunityCalc></section>
      {(selectedApps.length >0 && selectedStates.length >0 && count>=0 && count<4)  &&

          <div className={style.inner + " " + style.buttonss}>
             <button className={style.roundButton} onClick={()=>{  setCount(prev => prev+1) }}>Show Projections</button>
             <p> You can generate projections {3-count} times </p>
          </div>
}
        {(count> 0 && count < 4) &&
        <section>
          <Projection selectedApps={selectedApps} selectedCities={selectedStates} count={count} additionalDataSetter={setAdditionalData}></Projection>
          <AdditionCmp fixed={additionalData[0]} metered={additionalData[1]} ad={additionalData[3] } subscription={additionalData[2]}></AdditionCmp>
        </section>
        }

        {
          count>=4 &&   
          <>
          <div className={style.inner + " " + style.buttonss}>
          <button className={style.roundButton} onClick={()=>{  setCount(prev => prev+1) }}>Register</button>
          <p>Register to generate more projections </p>

             </div>
          </>

        }
        
    </section>
  )
}

export default FullOppurtunity