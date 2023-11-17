import React, { useState } from "react";
// import { useState } from "react";
// import "./mobileview.css"
import Style from "./mobileview.module.css"
import ResponsiveSolutions from "./mobviewsolutionspage";
import ResponsiveProducts from "./mobviewproductspage";
import ResponsivePlatform from "./mobviewplatform";
// import ResponsiveCompany from "./mobviewcompany";
import images from "../../../constants/images";
// import Button from "../../buttons";
// import Contact from "../../../pages/contact";
function Firstview(data){

 const [issolutions,setsolutions]=useState(false);
 const [isproducts,setproducts]=useState(false)
 const [isplatform,setplatform]=useState(false)
//  const [iscompany,setcompany]=useState(false)
const[page1,setpage1]=useState(true);
const[productspage1,setprodpage]=useState(true);
const[platformpage,setplatformpage]=useState(true);
// const[companypage,setcompanypage]=useState(true);
 const[isData,setData]=useState(true)

 const changeRoute=(Route)=>{
    window.location.href = Route;
}
    // console.log(data)
return(
    <>
      {isData&&(<div className={Style.firstpage}  >
      <div id={Style.contents}>
        <div>     
            <ul className={Style.listitems} onClick={()=>{setsolutions(true);setData(false);setpage1(true)}}>
                <div id={Style.content} ><li>Solutions</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div>
        <div>     
            <ul className={Style.listitems}  onClick={()=>{setproducts(true);setData(false);setprodpage(true)}}>
                <div id={Style.content}><li>Products</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div>
        <div>     
            <ul className={Style.listitems}  onClick={()=>{setplatform(true);setData(false);setplatformpage(true)}}>
                <div id={Style.content} ><li>Platform</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div>
        {/* <div>     
            <ul className={Style.listitems}  onClick={()=>{setcompany(true);setData(false);setcompanypage(true)}}>
                <div id={Style.content}><li>Company</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div> */}
        {/* <div>     
            <ul className={Style.listitems} onClick={()=>{window.location.href="/contact"}}>
                <div id={Style.content}><li>Contacts</li></div>
                <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div>
            </ul>
        </div> */}
               
      </div>
      <hr></hr>
      <div id={Style.bottomcontent}>
        <div ><button id={Style.book} onClick={()=>{changeRoute('/Contactus');setData(false)}}>Book a Demo</button></div>
        {/* <div id={Style.login}><span id={Style.log}>Login</span><span><img  src={images.Arrow} alt='vector'></img></span></div> */}
      </div>
    </div>)}
    {issolutions &&(
     <ResponsiveSolutions data={data.data[0]} setData={setData} page1={page1} setpage1={setpage1}/>
     
    )}
    {isproducts &&(
      <div className={Style.menu}>
       <ResponsiveProducts data={data.data[1]} setData={setData} productspage1={productspage1} setprodpage={setprodpage} />
      </div>
    )}
    {isplatform &&(
    
     <ResponsivePlatform data={data.data[2]} setData={setData} platformpage={platformpage} setplatformpage={setplatformpage}/>
    )}
    {/* {iscompany &&(
      <div className={Style.menu}>
      <ResponsiveCompany data={data.data[3]} setData={setData} companypage={companypage} setcompanypage={setcompanypage} />
      </div>
    )} */}
    </>
)
}
export default Firstview;