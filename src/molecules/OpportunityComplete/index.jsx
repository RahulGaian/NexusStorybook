import React from 'react'
import LeafletCanvasMap from '../leafLet'
import OpportunityCalc from '../OpportunityCalc'
import Projection from '../projection'
import style from "./index.module.css"
import { useState } from 'react'
const FullOppurtunity = () => {
    const [selectedStates,setSelectedStates] = useState([]);
    const [selectedApps,setSelectedApps] = useState([])
  return (
    <section>
        <section className={style.map}><LeafletCanvasMap listUpdater={setSelectedStates}></LeafletCanvasMap></section>
        <section> <OpportunityCalc data={selectedStates} listUpdater={setSelectedStates} selectedApps={selectedApps} selectedAppsUpdate={setSelectedApps}></OpportunityCalc></section>
        <section><Projection selectedApps={selectedApps} selectedCities={selectedStates}></Projection></section>
    </section>
  )
}

export default FullOppurtunity