import React from 'react'
import style from "./index.module.css"
import Img from '../../components/Image'
const DynamicTable1 = () => {
  return (
    <table className={style.table}>
        <thead>
            <tr>
                <th className={style.heading + " " + style.first}>Name</th>
                <th className={style.heading + " " + style.second}>Price</th>
                <th className={style.heading}>Change(24h)</th>
                <th className={style.heading}>Market Cap</th>
                <th className={style.heading}>Supported Network &nbsp; &#9432;</th>
                <th className={style.heading}>ESG Rating &nbsp; &#9432;</th>
            </tr>
            <tr className={style.row}>
                <td className={style.col1div} >
                        <Img src={"./Images/table1/crypt.svg"}></Img>
                        <p className={style.col1}>USD Coin</p>
                        <p className={style.col1middle}>USDC</p>
                        <div className={style.div1}>

                        <p className={style.col1end}>Earn up to 5.12%</p>
                        </div>
                </td>

                <td  >
       
                        <p className={style.col2p}>$ 2,223.032</p>
                        
                </td>

                <td  >
       
                      <p className={style.col3p}>+3.185%</p>
       
                </td>
                <td  >
       
                      <p className={style.col4p}>$ 267.28B</p>
       
                </td>
                <td  >
       
                     <Img src={"./Images/table1/crypt2.svg"}></Img>

                 </td>
                 <td  >
       
                    <Img src={"./Images/table1/Link.svg"}></Img>

                </td>


            </tr>
        </thead>
    </table>
  )
}

export default DynamicTable1