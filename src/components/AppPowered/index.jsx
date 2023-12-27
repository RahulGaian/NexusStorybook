import Img from "../Image";
import style from "./index.module.css"
import "./index.css"
const changeRoute=(Route)=>{
  window.location.href=Route
}
let SingleApp = ({image,heading,content,Route}) => {
    return(
        // <a>
        <article className={"border border-royal-gray-300  rounded-3xl bg-white " +style.card} >
          <div className="bg-opacity-20 h-40 rounded-t-3xl " >
            <div className={style.Image} > </div>
            <Img src={"../images/solutions/"+image} className={style.imagefolder} style={{height:"280px",top:"0px",position:"absolute"}}  ></Img>
            <header>
              <h5 className={style.heading + " text-center"} style={{width:"100%",position:"absolute",top:240,zIndex:111,color:"black"}}>{heading}</h5>
            </header>
          </div>
          <div className="bg-white container mt-36">
         
            <div className="mt-2">
              <p className="mt-2 text-royal-gray-500" style={{height:120,overflow:"hidden"}}>
                    {content}
              </p>
            </div>
          </div>
          <footer className="border-t border-royal-gray-300 rounded-full mt-8">
            <table className="table-auto border-collapse w-full h-14 border-gray-500 mt-0" >
              <tbody>
                <tr className=" grid grid-cols-2 items-center justify-center ">
                  <td className="border-r px-4 py-4 text-center flex items-center justify-center "    >
                    <Img className="inline-block" src="../images/icons/preview.svg" alt="Preview Icon" />
                    <strong className="text-base font-medium text-royal-gray-700" onClick={()=>{changeRoute(Route)}}>Preview</strong>
                  </td>
                  <td className="px-4 py-2 text-center flex justify-center">
                    <Img className="inline-block" src="../images/solutions/External.svg" alt="Preview Icon" />
                    <strong className="text-base font-medium text-royal-gray-700" onClick={()=>{changeRoute(Route)}}>Details</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </footer>
        </article>
      // </a>
    )
}

export default SingleApp;