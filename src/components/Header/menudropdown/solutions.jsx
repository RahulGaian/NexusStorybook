import Style from "./menu.module.css"
import React,{ useState } from "react"
import Img from "../../Image"
import images from "../../../constants/images"



function Solutions(props){
    const data=props.data
    const setIsOpen = props.setIsOpen
    // const [data2, setdata2] = useState([data[0].menus[1].items[0].subitems[0]]);
    const [data3,setdata3]=useState([]);
    const [isdata3,setisdata3]=useState(false);
    const changeRoute=(Route)=>{
        window.location.href = Route;
    }
    // 
    return(
        <>
        <div className={Style.menumain}>
        <div className={Style.menu} onMouseLeave={()=>{setIsOpen(false)}} >
       {/* <div> */}
            <div className={Style.cont1} >
            <div class={Style.topcont1}>
            <div><h5 class={Style.head}>{data[0].menus[1].name}</h5></div>
            <div>
            {data[0].menus[1].items.map((item) => (

                    <ul className={Style.listitems}  >
                       <div className={Style.content} onMouseEnter={()=>{setdata3(item.article);setisdata3(true)}} onClick={()=>{changeRoute(item.article.url)}}><li>{item.name}</li></div>
                    <div class={Style.rightarrow} 
                    onClick={()=>{
                        // setdata2(item.subitems);
                        setdata3(item.article);
                        // setvisible(true);
                        setisdata3(true)
                        }
                        }><img src={images.RightArrow} alt="rightarrow"/></div>
                        </ul>

                    ))}
            </div>
                
            </div>
            {/* <div className={Style.hrline}><hr></hr></div>
            <div class={Style.botcont1}>
            <div><h5 class={Style.head}>{data[0].menus[0].name}</h5></div>
                <div>
                {data[0].menus[0].items.map((item) => (
                <ul className={Style.listitems} 
                     >
                    <div className={Style.content} 
                    onMouseEnter={()=>{setdata3(item.article);setdata2(item.subitems);}}
                     onClick={()=>{changeRoute(item.article.url)}}
                    
                    >
                        <li>{item.name}</li></div>
                    <div class={Style.rightarrow}
                      onClick={()=>{
                        setdata2(item.subitems);
                        setdata3(item.article);
                        // setvisible(true)
                      }}

                    ><img src={images.RightArrow} alt="rightarrow"/></div>
                </ul>
                ))}
            </div>
            
            </div> */}
            </div>

        
            <div className={Style.cont2}>
                {/* <div className={Style.topcont1}>
                <div><h5 class={Style.head}>{data2[0].name}</h5></div>
            <div>
                { data2[0].items.map((item)=>(
                        <ul class={Style.listitems} onMouseEnter={()=>{setdata3(item.content);
                            // setisdata3(true) 
                        }}  ><div className={Style.content} onClick={()=>{changeRoute(item.content.url)}}><li>{item.name}</li></div>
                        <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow"/></div></ul>
                    ) )}
                   
            </div>
                </div> */}
            
            </div>

            {
                (isdata3) && (
                    <div className={Style.cont3} >
                        <div className={Style.topcont1}>
                            <div><h1 class={Style.header}><b>{data3.heading}</b></h1></div>
                            <div class={Style.description}>
                            {data3.description}
                            </div>
                            <div class={Style.arrowfolder}><div><h6><b>Learn More</b></h6></div>
                            <div className={Style.arrow}><Img  src={"/images/icons/Arrownew.png"}/></div>
                            </div>
                            <div class={Style.imagecontainer}>
                            <Img src={data3.coverImage} alt="finalimage"/>
                            </div>
                        </div>

            
            </div>
                )


            }

{
                ( !isdata3) && (
                    <div className={Style.cont3} >
                        <div className={Style.topcont1}>
                            <div><h1 class={Style.header}><b>{data[0].menus[1].items[0].article.heading}</b></h1></div>

                            <div class={Style.description}>
                            {data[0].menus[1].items[0].article.description}
                            </div>
                            <div class={Style.arrowfolder}><div><h6><b>Learn More</b></h6></div>
                            <div className={Style.arrow}><Img  src={"/images/icons/Arrownew.png"}/></div>
                            </div>
                            <div class={Style.imagecontainer}>
                            <Img src={data[0].menus[1].items[0].article.coverImage} />
                            </div>
                        </div>
                    </div>
                )

                
            }
                    
        </div>
        </div>
      
        </>
    )
}
export default Solutions;