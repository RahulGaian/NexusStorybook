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
import FullOppurtunity from '../OpportunityComplete';
const Loading = () => <h1 style={{color:"white"}}>Loadingggg</h1>

export function Map({setClick,clicked,interaction}) {
    let initialLocation ={}
    let initialScales = {}
    let counterZoom = 0
    let prevApp =""
    let app_names = ["Revee","GoFEMA","C-Link","HearHere","Museo","VoteIQ"]
    let isMobile = window.innerWidth < 600 ?true:false;
    let splineRef ;
    let i =0
  function onLoad(spline) {
    splineRef = spline;


      // setTimeout(location_finder, 4000);
   
    // //console.log(arr)
    spline.setZoom(30)
    if(isMobile){
      spline.setZoom(2)
    }
    // let rect = splineRef.findObjectByName("Revee");
    // rect.emitEvent("mouseDown","Revee")
    // spline.emitEvent("mouseDown","Revee")
    myLoop();
    // interaction();
  }

  function getSplineRef(){
    return splineRef;
  }
 
      
    function myLoop() {         
      setTimeout(function() {   
        //console.log('hello');   
        if (i < 6) {   
          let app = splineRef.findObjectByName(app_names[i]);
          setTimeout(()=>{
            try{

              app.emitEventReverse("mouseDown")
            }
            catch{
              //console.log("something wrong with map")
            }
          },3000)
          i++;             
          try{

            app.emitEvent("mouseDown")
          }       catch{
            //console.log("something wrong with map")
          }
          myLoop();             
        } 
        else{
          i=0;
          myLoop();
        }                      
      }, 8000)
    }
    

  // function onMouseDown(e) {
  //   //console.log('Clicked an object: ', e.target.name);
  //   let name = e.target.name;
  //   //console.log(name)
  //   if(name != prevApp && prevApp != ""){
  //     let app = splineRef.findObjectByName(prevApp);
  //     //console.log(initialLocation[prevApp],prevApp)
  //     app.emitEventReverse("mouseDown")

  //     //console.log(app.position)
  //   }
  //     if(app_names.includes(name)){
  //         // setClick(true);

  //         if(counterZoom == 0){
  //           location_finder();
  //           // splineRef.setZoom(1.3)

  //           counterZoom++;
          

  //       }
        
        
 
  //       prevApp = name
  //       //console.log(prevApp,"previous app")
  //     }
  // }


  return (
    <div className={clicked?style.map2 : style.map}>
      <Suspense fallback={<Loading/>}>
      <Spline 
        onLoad={onLoad}
        // onMouseDown={onMouseDown}
        // onMouseUp={onMouseDown}
        className={style.mapInternal}
        // scene={"https://prod.spline.design/wJQ51odjcNd-V-YH/scene.splinecode"}
        scene={"https://prod.spline.design/XEYOfsdHoAQvY6qI/scene.splinecode"}
        // scene={"https://prod.spline.design/LHOm5YTAtcLdHjII/scene.splinecode"}
        />
        </Suspense>
    </div>
  );
}

  // create a function to write blow fish algorithm

const Map3dComponent = () => {
  let isMobile = window.innerWidth < 600 ?true:false;

    const [Click,setClick] = useState(false)
    const [showLeaflet,setShowLeaflet] = useState(false)

  return (
    <>
    <div className={showLeaflet?style.mainDiv33:style.mainDiv}>

{
  !showLeaflet && 
        <>
        <div className={Click?style.mainDiv2:style.headDiv}>
            <h1 className={style.heading}>Impact Prediction Dashboard</h1>
            <p className={style.subHeading}>Scaling Deep, Social Entrepreneurship & Bricolage innovation</p>
        </div>
          <button className={style.buttons}  onClick={()=>{setShowLeaflet(true)}} >
              OPEN OPPORTUNITY CALCULATOR
          </button>

          <Map setClick={setClick} clicked={Click}></Map>
          <RotatingStars></RotatingStars>
        </>
}
{
  showLeaflet && <FullOppurtunity/>
}
    </div>


    </>
  )
}



export default Map3dComponent;