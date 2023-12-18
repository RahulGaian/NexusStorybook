import React from 'react'
import style from "./index.module.css"

import { useRef } from 'react';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { func } from 'prop-types';


export function Map({setClick,clicked}) {
    let arr = []
    

    function move(){
        for(let i =0;i<arr.length;i++){
            console.log(arr[i])
            try{
                arr[i].position.x += 100
                console.log("moved")
            }
            catch(e){
                console.log("something went wrong",e)
            }
        }
    }
  function onLoad(spline) {
    const obj = spline.findObjectByName('Clink');
    const part = spline.findObjectByName('Moving particles')
    console.log(part,"hellooo")

    for (let i =2;i<=25;i++){
        try{
            let name = 'Rectangle '+i
            let rect = spline.findObjectByName(name);
            const handler1 = {}
            let proxy1 = new Proxy(rect, handler1);

            arr.push(proxy1)

        }
        catch{
            console.log("not found")
        }
    }

    console.log(arr)

    // console.log(spline.getObjects())
    spline.setZoom(17)
    // console.log(Object.keys(spline), spline._camera);
  }

  function onMouseDown(e) {
      console.log('Clicked an object: ', e.target.name);
      let name = e.target.name;
      if(name == "Clink"){
        move();
        setClick(true);
        console.log("clicked clink")
        console.log(clicked)
      }
  }

  function onMouseMove(e) {
    // console.log("Mouse is moving over", e.target.name);
  }

  return (
    <div className={clicked?style.map2 : style.map}>
      <Spline 
        onLoad={onLoad}
        onMouseDown={onMouseDown}
        className={style.mapInternal}
        scene="https://prod.spline.design/sO9tS9c4paV1HRId/scene.splinecode"
      />
    </div>
  );
}

const Map3dComponent = () => {
    const [Click,setClick] = useState(false)
    

  return (
    <div className={style.mainDiv}>
        <div className={style.headDiv}>
            <h1 className={style.heading}>Impact Prediction Dashboard</h1>
            <p className={style.subHeading}>Scaling Deep, Social Entrepreneurship & Bricolage innovation</p>
        </div>
        
            <Map setClick={setClick} clicked={Click}></Map>
    
    </div>
  )
}

export default Map3dComponent