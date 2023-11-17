import "./index.css"
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// import images from "../../constants/images";
import SwiperCore, { Autoplay } from 'swiper';
import { useRef,useEffect,useState} from "react";
import SingleApp2 from "../singlecard";

let AppSwiper = ({data}) => {
    SwiperCore.use([Autoplay]);

    const swiperRef = useRef(null);
    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;
    
        let direction = 'ltr';
    
        const autoplayHandler = () => {
          if (swiperInstance.isEnd && direction === 'ltr') {
            direction = 'rtl';
            swiperInstance.params.autoplay.reverseDirection = true;
            swiperInstance.autoplay.stop();
            swiperInstance.autoplay.start();
          } else if (swiperInstance.isBeginning && direction === 'rtl') {
            direction = 'ltr';
            swiperInstance.params.autoplay.reverseDirection = false;
            swiperInstance.autoplay.stop();
            swiperInstance.autoplay.start();
          }
        };
    
        swiperInstance.on('autoplay', autoplayHandler);
    
        return () => {
          swiperInstance.off('autoplay', autoplayHandler);
        };
      }, []);

      const [slidesPerView, setSlidesPerView] = useState(5);
      useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth<600){
                setSlidesPerView(1);
              }
            else if (window.innerWidth < 980) {
                setSlidesPerView(2);
            } 
            else {
            setSlidesPerView(5);
          }
        };
    
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      
    return(
        <>
        <section >   
            <div className="appswiperheader">
              <div  className="AppsPowered">
              <h1 >Apps Powered by Mobius </h1>
              </div>
                    
            </div>
           <div className="appswipermain">
           <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        centeredSlides={true}
        initialSlide={4}
        grabCursor={true}
        
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
          direction: 'ltr',
        }}
        pagination={{
            clickable: true,
        }}

        autoplay={{
            delay:2000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
    
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper2landingpage"
  
        >
        <SwiperSlide>
            <SingleApp2 
             image={"1.png"}
             heading={"311"}
             content={`311 citizen engagement app is a mobile application that
             allows citizens to report non-emergency issues to their
             local government and receive updates on the status of
             their requests.`}
             Route={'/products/311'}
             >

            </SingleApp2>
        </SwiperSlide>
              
        <SwiperSlide>
            <SingleApp2 
             image={"2.png"}
             heading={"Live Maps"}
             content={`A Mobius Intelligent Application that leverages NextGenTV capabilities to provide real-time interactive maps with location-based information, including points of interest, directions, and local events. Live Maps enriches the user experience by offering dynamic and visually appealing map features.`}
             Route={'/solutions/live-maps'}
             >
            </SingleApp2>
        </SwiperSlide>
              
        <SwiperSlide>
            <SingleApp2 
             image={"3.png"}
             heading={"First Responder"}
             content={`First Responder Alerting MIA provides real-time, intelligent alerting capabilities to improve emergency response times, coordination, and effectiveness. With advanced notification systems and streamlined communication channels, first responders can quickly and efficiently address critical incidents, saving lives and minimizing damages.`}
             Route={'/products/fra'}
             >

            </SingleApp2>
        </SwiperSlide>
              
        <SwiperSlide>
            <SingleApp2 
             image={"dig.png"}
             heading={"Digital Signage"}
             content={`Digital Signage, powered by Mobius DTaaS, revolutionizes the signage industry by providing an interactive, scalable, and collaborative solution, enabling businesses to create engaging content, leverage real-time data insights, streamline operations, and generate new revenue streams.`}
             Route={'/products/DSaaS'}
             >

            </SingleApp2>
        </SwiperSlide>

        <SwiperSlide>
            <SingleApp2 
             image={"suh.png"}
             heading={"SUHAaaS"}
             content={`SUHAaaS is a groundbreaking SaaS application built on the Mobius DTaaS Low Code Platform, utilizing its five powerful tools. SUHAaaS reimagines the way software updates and home automation are delivered to consumer electronic (CE) devices, leveraging the ATSC 3.0/NextGenTV spectrum for efficient and seamless updates.`}
             Route={'/products/SUHAaas'}
             >

            </SingleApp2>
        </SwiperSlide>

        <SwiperSlide>
            <SingleApp2 
             image={"live_news_swiper.jpg"}
             heading={"Live News"}
             content={`The Live News App is a next-generation TV application built on top of Mobius as a fullscreen TV app delivered over ATSC 3.0 spectrum, designed to enable NextGenTV broadcasters to offer personalized, hyper-targeted, and rich-media news content to their consumers.`}
             Route={'/products/live-news'}
             >

            </SingleApp2>
        </SwiperSlide>
          <SwiperSlide>
            <SingleApp2 
             image={"2.png"}
             heading={"Live Traffic"}
             content={`Live Traffic is an innovative, next-generation TV application built on top of Mobius, designed to deliver real-time traffic updates and insights directly to viewers through fullscreen TV apps using ATSC 3.0 spectrum. `}
             Route={'/products/live-traffic'}
             >

            </SingleApp2>
        </SwiperSlide>
        <SwiperSlide>
            <SingleApp2 
             image={"giving_swiper.jpg"}
             heading={"Giving App"}
             content={`Simplify and optimize fund raising campaigns with our Fund Raising MIA, enabling organizations to raise funds efficiently and effectively.`}
             Route={'/products/giving-app'}
             >

            </SingleApp2>
        </SwiperSlide>
         <SwiperSlide>
            <SingleApp2 
             image={"2.png"}
             heading={"ZoomBot Pro"}
             content={`ZoomBot Pro is a powerful and innovative SaaS application built on top of the Mobius DTaaS Low Code Platform. It is designed to help businesses using the Zoom Communications Platform to measure meeting productivity, gain insights into meeting conversations, and receive participant behavioral feedback.`}
             Route={'/products/zoombot-pro'}
             >

            </SingleApp2>
        </SwiperSlide>
         <SwiperSlide>
            <SingleApp2 
             image={"hd_radio_swiper.jpg"}
             heading={"Vani HD Radio"}
             content={`Enhance the radio listening experience with our Vani HD Radio MIA, delivering high-quality audio and interactive features for immersive content.`}
             Route={'/products/vani-hd-radio'}
             >
            </SingleApp2>
        </SwiperSlide>
        
      </Swiper>
           </div>
       
    </section>
    </>
    )
}


export default AppSwiper;