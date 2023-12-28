import React from 'react'
import style from "./index.module.css"
import test from "./test.spline"
import { useRef } from 'react';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { func } from 'prop-types';
import KnowMore from '../knowMore';
import HowWhoWhy from '../howWhoWhy';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import RotatingStars from '../rotatingStars';


export function Map({setClick,clicked}) {
    let initialLocation ={}
    let initialScales = {}
    let counterZoom = 0
    let prevApp =""
    let app_names = ["Revee","GoFEMA","C-Link","HearHere","Museo","VoteIQ"]

    let splineRef ;
  function onLoad(spline) {
    splineRef = spline;


      // setTimeout(location_finder, 4000);
   
    // console.log(arr)
    spline.setZoom(27)
    // let rect = splineRef.findObjectByName("Revee");
    // rect.emitEvent("mouseDown","Revee")
    // spline.emitEvent("mouseDown","Revee")
  }
  const location_finder = () =>{

      
    for (let i of app_names){
      try{
        let name = i;
        let rect = splineRef.findObjectByName(name);
          // const handler1 = {}
          // let proxy1 = new Proxy(rect, handler1);
          initialLocation[rect.name] = [rect.position.x,rect.position.y,rect.position.z]
          initialScales[rect.name] = [rect.scale.x,rect.scale.y,rect.scale.z]
          console.log(rect.rotation.x,rect.rotation.y,rect.rotation.z)
          console.log(rect.scale)
          // arr.push(proxy1)

        }
        catch{
          console.log("not found")
        }
      }
      
      console.log(initialLocation)
    }

  function onMouseDown(e) {
    console.log('Clicked an object: ', e.target.name);
    let name = e.target.name;
    console.log(name)
    if(name != prevApp && prevApp != ""){
      let app = splineRef.findObjectByName(prevApp);
      console.log(initialLocation[prevApp],prevApp)
      app.emitEventReverse("mouseDown")

      console.log(app.position)
    }
      if(app_names.includes(name)){
          setClick(true);

          if(counterZoom == 0){
            location_finder();
            splineRef.setZoom(1.3)

            counterZoom++;
          

        }
        
        
 
        prevApp = name
        console.log(prevApp,"previous app")
      }
  }



  return (
    <div className={clicked?style.map2 : style.map}>
      <Suspense fallback={<Loader/>}>
      <Spline 
        onLoad={onLoad}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseDown}
        className={style.mapInternal}
        // scene={"https://prod.spline.design/wJQ51odjcNd-V-YH/scene.splinecode"}
        scene={"https://prod.spline.design/XEYOfsdHoAQvY6qI/scene.splinecode"}
        />
        </Suspense>
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

          <KnowMore bgColor='linear-gradient(97deg, #197CBF -0.4%, #004871 100.09%)'/>
          <KnowMore bgColor='linear-gradient(97deg, #197CBF -0.4%, #004871 100.09%)'/>
          <KnowMore bgColor='linear-gradient(97deg, #197CBF -0.4%, #004871 100.09%)'/>

        </div>

        <RotatingStars></RotatingStars>

    </div>


    </>
  )
}



export default Map3dComponent