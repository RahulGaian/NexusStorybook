import React from "react"
// import Style from "./menu.module.css"
import Style from "./products.module.css"
import { useState } from "react"
// import arrow from "../../../images/icons/arrow-right.png"
// import arrow1 from "../../../images/icons/Vectorrightarrow.png"
import Img from "../../../components/Image"
import images from "../../../constants/images"
import { FiArrowRight } from 'react-icons/fi';


function Products(props){
    const data=props.data;
    const setproducts=props.setproducts;
    const [data2, setdata2] = useState([data[0].menus[0].items[0].subitems[0]]);
    const[data3,setdata3]=useState([]);
    const[data4,setdata4]=useState([]);
    // console.log(data4)
    const [isdata3,setisdata3]=useState(false)
    const [isdata4,setisdata4]=useState(false);
    const[visible,setvisible]=useState(true)
    // const [rightar,setRightar] = useState()
    const changeRoute=(Route)=>{
        window.location.href = Route;
     }
    return(
        <>
        <div className={Style.menu} onMouseLeave={()=>{setproducts(false)}}>
       
            <div id={Style.cont1} onMouseEnter={()=>{setvisible(true)}}>
            <div className={Style.topcont1}>
                <h5 className={Style.head}>{data[0].menus[0].name}</h5>
                <div>
                {data[0].menus[0].items.map((item) => (
                <ul className={Style.listitems} onMouseEnter={()=>{
                    setdata2(item.subitems);
                    setdata3(item.article);
                    setisdata3(true)
                    // setvisible(true)
                    }}>
                    <div id={Style.content}  onClick={()=>{setvisible(true);setdata2(item.subitems)}} ><li>{item.name}</li></div>
                    <div className={Style.rightarrow} onClick={()=>{setdata2(item.subitems);setvisible(true)}}><img src={images.RightArrow} alt="rightarrow"/></div>
                </ul>
                ))}
                </div>
                
            </div>
            </div>
            {
            visible &&(
                    <div id={Style.cont2}>
                        <h5 className={Style.head}>{data2[0].name}</h5>
                        <div>
                            { data2[0].items.map((item)=>(
                                <ul className={Style.listitems} onMouseEnter={()=>{setdata3(item.content);setdata4(item.subitems);setisdata3(true) }}  >
                                    <div id={Style.content} onClick={()=>{changeRoute(item.content.url)}}><li>{item.name}</li></div>
                                    <div class={Style.rightarrow} onClick={()=>{setdata4(item.subitems);}}><img src={images.RightArrow} alt="rightarrow"/></div>
                                </ul>
                            ))}
                        </div>
                    </div>
                )
            }

            {
            (visible && isdata3)&&(
                <div id={Style.cont3} onMouseLeave={()=>{setisdata4(false)}}>
                <div><h1 className={Style.header}><b>{data3.heading}</b></h1></div>
        
                <div className={Style.description}>
                    {data3.description}
                </div>
                <div className={Style.arrowfolder} onMouseEnter={()=>{setisdata4(true)}} ><div><h6><b>Learn More</b></h6></div>
                <div className={Style.arrow}><FiArrowRight /></div>
                </div>
               {isdata4&&(
                <div id={Style.displaydata3} >
                    { data4.map((item)=>(
                        <ul className={Style.listitems} onMouseEnter={()=>{setdata3(item.content)}} ><div id={Style.content} onClick={()=>{changeRoute(item.content.url)}}><li>{item.name}</li></div>
                        <div class={Style.rightarrow} onClick={()=>{changeRoute(item.content.url)}}><img src={images.RightArrow} alt="rightarrow"/></div>
                        </ul>
                    ) )}
                    </div>
               )}
               
                <div className={Style.imagecontainer}>
                    <Img src={data3.coverImage} alt="finalimage"/>
                </div>
            
            </div>
            )
            }

{
            (visible && !isdata3)&&(
                <div id={Style.cont3} onMouseLeave={()=>{setisdata4(false)}}>
                <div><h1 className={Style.header}><b>{data[0].menus[0].items[0].article.heading}</b></h1></div>
        
                <div className={Style.description}>
                {data[0].menus[0].items[0].article.description}
                </div>
                <div className={Style.arrowfolder} onMouseEnter={()=>{setisdata4(true)}} ><div><h6><b>Learn More</b></h6></div>
                <div className={Style.arrow}><FiArrowRight /></div>
                </div>
               {isdata4&&(
                <div id={Style.displaydata3} >
                    { data4.map((item)=>(
                        <ul className={Style.listitems} onMouseEnter={()=>{setdata3(item.content)}} ><div id={Style.content} onClick={()=>{changeRoute(item.content.url)}}><li>{item.name}</li></div>
                        <div class={Style.rightarrow} onClick={()=>{changeRoute(item.content.url)}}><img src={images.RightArrow} alt="rightarrow"/></div>
                        </ul>
                    ) )}
                    </div>
               )}
               
                <div className={Style.imagecontainer}>
                    <Img src={data[0].menus[0].items[0].article.coverImage} alt="finalimage"/>
                </div>
            
            </div>
            )
            }
         
            
          
            
        </div>
        </>
    )
}
export default Products





   
// {/* {isdata3&& (
// <div id={Style.cont3} onMouseLeave={()=>{setisdata4(false)}}>
// <div><h1 className={Style.header}><b>{data3.heading}</b></h1></div>

// <div className={Style.description}>
//     {data3.description}
// </div>
// <div className={Style.arrowfolder} onMouseEnter={()=>{setisdata4(true)}} ><div><h6><b>Learn More</b></h6></div><div className={Style.arrow}><img src={process.env.PUBLIC_URL + "images/icons/arrow-right.svg"} alt="arrowimg"/></div></div>
// {isdata4&&(
// <div id={Style.data4content} >
//     { data4.map((item)=>(
//         <ul className={Style.listitems}><div id={Style.content}><li>{item.name}</li></div>
//         <div class={Style.rightarrow}><img src={process.env.PUBLIC_URL + "images/icons/Vectorrightarrow.png"} alt="rightarrow"/></div></ul>
//     ) )}
//     </div>
// )}

// <div className={Style.imagecontainer}>
//     <Img src={data3.coverImage} alt="finalimage"/>
// </div>

// </div>
// )
// } */}



// {/* {
// !isdata3 &&(
// <div id={Style.cont3}  >
// <div><h1 className={Style.header}><b>{data[0].menus[0].items[0].article.heading}</b></h1></div>

// <div  className={Style.description}>
// {data[0].menus[0].items[0].article.description}
    
// </div>
// <div className={Style.arrowfolder}><div><h6><b>Learn More</b></h6></div><div className={Style.arrow}><img src={process.env.PUBLIC_URL + "images/icons/arrow-right.svg"} alt="arrowimg"/></div></div>
// <div className={Style.imagecontainer}>
//     <Img src={data[0].menus[0].items[0].article.coverImage} alt="finalimage"/>
// </div>

// </div>
// )
// } */}


// {/* <div id='hrline'><hr></hr></div>
// <div className={Style.botcont1}>
// <h5 className={Style.head}>{data[0].menus[1].name}</h5>
// <div>
// {data[0].menus[1].items.map((item) => (
// <ul className={Style.listitems} onMouseEnter={()=>{setdata2(item.subitems);setisdata3(true);setdata3(item.article)}} >
// <div id={Style.content}><li>{item.name}</li></div>
// <div class={Style.rightarrow}><img src={process.env.PUBLIC_URL + "images/icons/Vectorrightarrow.png"} alt="rightarrow"/></div>
// </ul>
// ))}
// </div>

// </div> */}