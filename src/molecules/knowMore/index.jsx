import React from 'react'
import style from "./index.module.css"
import Img from "../../components/Image"
const KnowMore = ({heading="Lorem Ipsum",subHead="Lorem Ipsum font",content="Email, SMS, WhatsApp  Brevo lets you create brilliant campaigns of all shapes and sizes",know="Download to know more",bgColor="linear-gradient(101deg, rgba(216, 239, 255, 0.60) 10.23%, rgba(25, 137, 212, 0.13) 84.38%)",Image="./Images/placeholders/mark.png"}) => {
  return (
    <div className={style.mainDiv} style={{background:bgColor}}>
            <Img src={Image}></Img>
            <div className={style.subDiv}>
                <h1 className={style.firstText}>{heading}</h1>
                <h1 className={style.secondText}>{subHead}</h1>
                <h1 className={style.thirdText}>{content}</h1>

                <div className={style.down}>
                    <h1 className={style.fourthText}>{know}</h1>
                        <Img className={style.rotate} src="./Images/placeholders/left.png"></Img>
                </div>

            </div>
    </div>
  )
}

export default KnowMore;