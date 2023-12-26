import React from 'react'
// import RightArrow from "../../../images/platform/PascalIntelligence/arrowPinkRight.png"

import Img from '../../Image';
import "./SeeAlso.css";
const SeeAlso = ({name,desc,link}) => {
  return (
    <section className='seeAlsoContainer'>
        <h3>See Also</h3>
        <h1>{name}</h1>
        <p>{desc}</p>
        <Img   onClick={()=>{console.log("hello:");window.location.href="/platform/"+link}} src={"/aidtaasImages/images/images/platform/PascalIntelligence/Arrow(1).png"} alt=''/>
    </section>
  )
}

export default SeeAlso