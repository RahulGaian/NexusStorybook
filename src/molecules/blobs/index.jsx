import React from 'react'
import style from './index.module.css'
const Blobs = ({color="blue",radius="560px",opacity="0.3",top=0,left=0,right=0,bottom=0,zIndex=-1}) => {
    let colors = {"blue":"#005DA4","yellow":'#FF9B00'}
  return (
    <div  style={{background:`radial-gradient(42.29% 42.29% at 50% 50%, ${colors[color]} 0%, rgba(68, 165, 255, 0.00) 79.62%)`,
            borderRadius:radius,opacity:opacity,filter:"blur(32px)",width:radius,height:radius,position:"absolute",top:top,left:left,zIndex:zIndex}} className={style.blob}>Blobs</div>
  )
}

export default Blobs