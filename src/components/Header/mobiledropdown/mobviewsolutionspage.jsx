import React from "react";
import { useState } from "react";
import Style from "./solutions.module.css"
import Style2 from "./mobileview.module.css"
import Img from "../../Image"
import images from "../../../constants/images";
import { FiArrowRight } from 'react-icons/fi';
// import { } from 'react-icons/fa';
function ResponsiveSolutions (props){
    const data=props.data
    const setData=props.setData
    // console.log(data.menus[0].items[0].name)
    const [data2, setdata2] = useState([]);
    const[data3,setdata3]=useState([]);
    const page1 =props.page1
    const setpage1=props.setpage1
    const[page2,setpage2]=useState(false);
    const[page3,setpage3]=useState(false)
    // const[data3,setdata3]=useState([]);
    // const [isdata3,setisdata3]=useState(false)
    const changeRoute=(Route)=>{
        window.location.href = Route;
    }
    // const [rightar,setRightar] = useState()
    return(
        <>
        {
            page1&&(
                <div className={Style2.menu} >
            <div className={Style.topcont}>
            <div id={Style2.returnarrow}><img src={images.leftarrow} alt="returnarrow" onClick={()=>{setData(true);setpage1(false)}}/></div>
                <h5 class={Style.head}>{data.menus[0].name}</h5>
                <div>
                {data.menus[1].items.map((item) => (
                <ul className={Style.listitems} 
                // onClick={()=>{
                    // setdata2(item.subitems);
                    // setpage2(true);
                    // setpage1(false);
                    // }}
                     >
                    <div id={Style.content} onClick={()=>{setpage1(false);changeRoute(item.article.url)}}><li>{item.name}</li></div>
                    <div class={Style.rightarrow}
                     onClick={()=>{
                        setdata2(item.subitems);
                        setpage1(false)
                        setpage2(true)
                    }}
                     ><img src={images.RightArrow} alt="rightarrow"/></div>
                </ul>
                ))}
                </div>
                
            </div>
            <div id={Style.hrline}><hr></hr></div>
            <div className={Style.botcont} >
            <h5 class={Style.head}>{data.menus[1].name}</h5>
            <div>
            {data.menus[0].items.map((item) => (
                    <ul className={Style.listitems}
                        >
                       <div id={Style.content} onClick={()=>{setpage1(false);changeRoute(item.article.url)}}><li>{item.name}</li></div>
                    <div class={Style.rightarrow} 
                     onClick={()=>{
                        setdata2(item.subitems);
                        setpage1(false)
                        setpage2(true)
                     }}
                    ><img src={images.RightArrow} alt="rightarrow"/></div>
                        </ul>
                    ))}
            </div>
            
            </div>
            </div>
            )
        }
            
            {
                page2&&(
                    <div className={Style2.menu}>
                        <div id={Style.page2content} >
                            <div id={Style2.returnarrow}><img src={images.leftarrow} alt="returnarrow" onClick={()=>{setpage1(true);setpage2(false)}}/></div>
                    <h5 class={Style.head}>{data2[0].name}</h5>
                    <div>
                    { data2[0].items.map((item)=>(
                    <ul class={Style.listitems}  
                    //onClick={()=>{setdata3(item.content);setpage2(false);setpage3(true)}}
                    ><div id={Style.content} onClick={()=>{setpage2(false);changeRoute(item.content.url)}}><li>{item.name}</li></div>
                    <div class={Style.rightarrow}
                    onClick={()=>{setdata3(item.content);setpage2(false);setpage3(true)}}
                    ><img src={images.RightArrow} alt="rightarrow"/></div></ul>
                    ) )}

                    </div>
                    </div>
                    </div>
                    
                )
            }

            {
                page3&&(
                    <div className={Style2.menu}>
  <div id={Style.page3content} >
  <div id={Style2.returnarrow}><img src={images.leftarrow} alt="returnarrow" onClick={()=>{setpage2(true);setpage3(false)}}/></div>
                <div><h1 class={Style.header}><b>{data3.heading}</b></h1></div>
        
                <div class={Style.description}>
                    {data3.description}
                </div>
                <div class={Style.arrowfolder}><div><h6><b>Learn More</b></h6></div><div class={Style.arrow} onClick={()=>{changeRoute(data3.url)}}><FiArrowRight /></div></div>
                <div class={Style.imagecontainer}>
                    <Img src={data3.coverImage} alt="finalimage"/>
                </div>
            
            </div>
                    </div>
                  
                )
            }
            
          
            
        
        </>
    )
}

export default ResponsiveSolutions;