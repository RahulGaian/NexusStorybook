// import Img from "../Image";
import style from "./index.module.css"
const changeRoute=(Route)=>{
  window.location.href=Route

}
let SingleApp2 = ({image,heading,content,Route}) => {
    const background = `url(${image})`;
    
    return(
        <article className={style.card} >
          <div className={style.Imagecontainer}  style={{backgroundImage:background}}>
            <div className={style.Imagecontainer2}>
            <h5 className={style.heading } >{heading}</h5>
            </div>
          </div>
          <div className={style.contentcontainer}>
              <div className={style.content1}>
                    {content}
              </div>
              <div className={style.contentbtns}>
                   {/* <div onClick={()=>{changeRoute(Route)}}><span><Img className="inline-block" src="/images/icons/preview.svg" alt="Preview Icon" /></span><span>Preview</span></div>
                   <div onClick={()=>{changeRoute(Route)}}><span><Img className="inline-block" src="/images/solutions/External.svg" alt="Preview Icon" /></span><span>Details</span> </div> */}
                    <div onClick={()=>{changeRoute(Route)}}><span><img className="inline-block" src={require("./preview.png")} alt="Preview" /></span><span>Preview</span></div>
                   <div onClick={()=>{changeRoute(Route)}}><span><img className="inline-block" src={require("./External.png")} alt="External" /></span><span>Details</span> </div>
              </div>
          </div>     
        </article>
    )
}

export default SingleApp2;