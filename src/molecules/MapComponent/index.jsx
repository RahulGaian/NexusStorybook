import React from 'react'
import style from "./index.module.css"
import test from "./test.spline"
import { useRef } from 'react';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { func } from 'prop-types';
import KnowMore from '../knowMore';
import HowWhoWhy from '../howWhoWhy';

import RotatingStars from '../rotatingStars';


export function Map({setClick,clicked}) {
    let arr = []
    let counterZoom = 0
    let counter = 0; 
    let splineRef ;
  function onLoad(spline) {
    splineRef = spline;
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
    spline.setZoom(27)

  }

  function onMouseDown(e) {
      console.log('Clicked an object: ', e.target.name);
      let name = e.target.name;
      console.log(name)
      if(name == "Group 6" || name =="Group 3" || name=="Group 4"){
        counter++;
        if(counter == 1){
          setClick(true);
          counter = 0;
          if(counterZoom == 0){

            splineRef.setZoom(1.3)
            counterZoom++;
          }

        }
        
        
        console.log("clicked clink")
        console.log(clicked)
      }
  }



  return (
    <div className={clicked?style.map2 : style.map}>
      <Spline 
        onLoad={onLoad}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseDown}
        className={style.mapInternal}
        // scene={"https://prod.spline.design/wJQ51odjcNd-V-YH/scene.splinecode"}
        scene={"https://prod.spline.design/XEYOfsdHoAQvY6qI/scene.splinecode"}
      />
    </div>
  );
}

  // create a function to write blow fish algorithm

const Map3dComponent = () => {
    const [Click,setClick] = useState(false)
    

  return (
    <>
    <div className={style.mainDiv}>
        <div className={Click?style.mainDiv2:style.headDiv}>
            <h1 className={style.heading}>Impact Prediction Dashboard</h1>
            <p className={style.subHeading}>Scaling Deep, Social Entrepreneurship & Bricolage innovation</p>
        </div>
        <Map setClick={setClick} clicked={Click}></Map>
        {/* <div className={Click?style.bottom:style.bottombt}>
          <div className={style.bottomtop}>
                <div>
                    <h1 className={style.how}>How</h1>
                  </div>        <div>
                    <h1 className={style.how}>Who</h1>
                  </div>        <div>
                    <h1 className={style.how}>Why</h1>
                  </div>
          </div>
          <div className={style.bottomb}>

          <KnowMore bgColor='lightgrey'/>
          </div>

        </div> */}
        <div className={Click?style.right:style.rightr}>
          {/* <div>
            <h1 className={style.how}>How</h1>
          </div> */}
          {/* <div className={style.bottomtop}>
                <div>
                    <h1 className={style.how}>How</h1>
                  </div>        <div>
                    <h1 className={style.how}>Who</h1>
                  </div>        <div>
                    <h1 className={style.how}>Why</h1>
                  </div>
          </div> */}
          <HowWhoWhy></HowWhoWhy> 

          <KnowMore bgColor='lightgrey'/>
          <KnowMore bgColor='lightgrey'/>

          <KnowMore bgColor='lightgrey'/>

        </div>

        <RotatingStars></RotatingStars>

    </div>


    </>
  )
}

export default Map3dComponent