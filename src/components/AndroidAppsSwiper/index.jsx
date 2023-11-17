import "swiper/css";
// import SingleApp from "../AppPowered";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination } from "swiper";
import Img from "../Image";
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
                <Img src="images/apps/12.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
            <SwiperSlide id='content'>
                <Img src="images/apps/13.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
            <SwiperSlide id='content'>
                <Img src="images/apps/14.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
            <SwiperSlide id='content'>
                <Img src="images/apps/appstore.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
            <SwiperSlide id='content'>
                <Img src="images/apps/drive.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
            <SwiperSlide id='content'>
                <Img src="images/apps/playstore.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
            <SwiperSlide id='content'>
                <Img src="images/apps/slack.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
            <SwiperSlide id='content'>
                <Img src="images/apps/zoom.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
            <SwiperSlide id='content'>
                <Img src="images/apps/12.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
            <SwiperSlide id='content'>
                <Img src="images/apps/13.png" style={{height:"50px"}}></Img>
            </SwiperSlide>
        </Swiper>
    )
}

export default AndroidApps;