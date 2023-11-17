import React from "react";
import { useState } from "react";
import Style from "./menu.module.css"
import { FiArrowRight } from 'react-icons/fi';
import Img from "../../Image"
import images from "../../../constants/images";

function Services(props) {
  const data = props.data;
  const setservice=props.setservice;
  const [visible, setvisible] = useState(true)

  const [data4, setdata4] = useState([]);

  const [cont3,setcont3]=useState(false)
  const [data2, setdata2] = useState(data[0].menuItems[0].list[0].subitems)
  console.log(data2)
  const changeRoute = (Route) => {
    window.location.href = Route;

  }
  return (
    <>
      <div className={Style.menu} onMouseLeave={()=>{setservice(false)}} >
        <div id={Style.cont1} onMouseEnter={()=>{setvisible(true)}}>

          <div className={Style.topcont1}>
            <h5 className={Style.head}>{data[0].menuItems[0].name}</h5>

            <div id={Style.content}> {data[0].menuItems[0].list.map((item) => (
              <ul className={Style.listitems} onMouseEnter={() => {
                setdata2(item.subitems)
                setdata4(item.article);
                setcont3(true);
              }}  >
                <div id={Style.content} onClick={() => {changeRoute(item.article.url)}} ><li>{item.name}</li></div>
                <div className={Style.rightarrow} onClick={()=>{setvisible(true)}}><img src={images.RightArrow} alt="rightarrow" /></div>
              </ul>
            ))}
            </div>

          </div>

        </div>
        {visible && (
          <div id={Style.cont2}>
            <h5 class={Style.head}>{data2.name}</h5>
            <div>
              {data2.items.map((item) => (
                <ul class={Style.listitems} onMouseEnter={() => {
                 setdata4(item.content)
                }} onClick={() => { changeRoute(item.content.url) }}><div id={Style.content}><li>{item.name}</li></div>
                  <div class={Style.rightarrow}><img src={images.RightArrow} alt="rightarrow" /></div></ul>
              ))}

            </div>
          </div>

        )}

        {
          (visible && cont3) &&(
            <div id={Style.cont3} >
              <div><h1 className={Style.header}><b>{data4.heading}</b></h1></div>

              <div className={Style.description}>
                {data4.description}
              </div>
              <div className={Style.arrowfolder} onMouseEnter={() => { }}><div>
                <h6><b>Learn More</b></h6>
                </div>
                <div className={Style.arrow}><FiArrowRight /></div>
                </div>
              <div className={Style.imagecontainer}>
                <Img src={data4.coverImage} alt="finalimage" />
              </div>
            </div>
          )
        }

{
          (visible && !cont3) &&(
            <div id={Style.cont3} >
              <div><h1 className={Style.header}><b>{data[0].menuItems[0].list[0].article.heading}</b></h1></div>

              <div className={Style.description}>
                {data[0].menuItems[0].list[0].article.description}
              </div>
              <div className={Style.arrowfolder} onMouseEnter={() => { }}><div>
                <h6><b>Learn More</b></h6>
                </div>
                <div className={Style.arrow}><FiArrowRight /></div>
                </div>

              <div className={Style.imagecontainer}>
                <Img src={data[0].menuItems[0].list[0].article.coverImage} alt="finalimage" />
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Services;