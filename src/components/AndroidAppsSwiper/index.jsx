import "swiper/css";
// import SingleApp from "../AppPowered";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination } from "swiper";
import "./index.css"
let AndroidApps = () => {
    return(
        <Swiper 
        
        centeredSlides={false}
        // loop={true}
        grabCursor={true}
        autoplay=
        {{
          delay: 1000,
        }}
        initialSlide={3}

        slidesPerView={"7"}
        freeMode={true}

        pagination={{
            clickable: true,
        }}
        
        className="swipermenu"
        >
            <SwiperSlide id='content'>
                <img src={require("./images/12.png")} alt="" />
            </SwiperSlide>
            <SwiperSlide id='content'>
            <img src={require("./images/13.png")} alt="" />
            </SwiperSlide>
            <SwiperSlide id='content'>
            <img src={require("./images/14.png")} alt="" />
            </SwiperSlide>
            <SwiperSlide id='content'>
            <img src={require("./images/appstore.png")} alt=""  />
            </SwiperSlide>
            <SwiperSlide id='content'>
            <img src={require("./images/drive.png")} alt=""  />
            </SwiperSlide>
            <SwiperSlide id='content'>
            <img src={require("./images/playstore.png")} alt="" />
            </SwiperSlide>
            <SwiperSlide id='content'>
            <img src={require("./images/slack.png")} alt="" />
            </SwiperSlide>
            <SwiperSlide id='content'>
            <img src={require("./images/zoom.png")} alt="" style={{height:"50px"}} />
            </SwiperSlide>
            <SwiperSlide id='content'>
            <img src={require("./images/12.png")} alt="" style={{height:"50px"}} />
            </SwiperSlide>
            <SwiperSlide id='content'>
            <img src={require("./images/13.png")} alt="" style={{height:"50px"}} />
            </SwiperSlide>
        </Swiper>
    )
}

export default AndroidApps;