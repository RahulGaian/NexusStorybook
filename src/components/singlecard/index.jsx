import Img from "../Image";
import style from "./index.module.css"
const changeRoute=(Route)=>{
  window.location.href=Route

}
let SingleApp2 = ({image,heading,content,Route}) => {
    const background = `url("${image}")`;
    
    return(
        <article className={style.card} >
          <div className={style.Imagecontainer}  style={{backgroundImage:background}}>
            <div className={style.Imagecontainer2}>
            <h5 className={style.heading } >{heading}</h5>
            </div>
          </div>
          <div className={style.contentcontainer}>
              <div className={style.content1}>
                 <p>
                  
                     {content}
                  </p>
              </div>
              <div className={style.contentbtns}>
                   <div className={style.prev} onClick={()=>{changeRoute(Route)}}><span><Img className={style.images} src="/aidtaasImages/images/images/icons/preview.svg" alt="Preview Icon" /></span><span className={style.names}>Preview</span></div>
                   <div className={style.prev} onClick={()=>{changeRoute(Route)}}><span><Img className={style.images} src="/aidtaasImages/images/images/solutions/External.svg" alt="Preview Icon" /></span><span className={style.names}>Details</span> </div>
              </div>
          </div>     
        </article>
    )
}

export default SingleApp2;