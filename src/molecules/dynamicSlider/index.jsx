import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import Style from "./index.module.css";
import Img from "../../components/Image";
SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
  const contentData = [
    {
      description:
        "“Their approach to onboarding users is unmatched - providing education and security in equal measures. But what sets SwissBorg apart is their vibrant community, always at the forefront of the latest developments in investment opportunities for cryptocurrencies. I'm proud to be a part of it.”",
      imagesrc1: "/Images/launchpadSlider/profile.webp",
      name: "Sébastien Borget",
      designation: "COO & Co-Founder - The Sandbox",
    },
    {
      description:
        "“Their approach to onboarding users is unmatched - providing education and security in equal measures. But what sets SwissBorg apart is their vibrant community, always at the forefront of the latest developments in investment opportunities for cryptocurrencies. I'm proud to be a part of it.”",

      imagesrc1: "/Images/launchpadSlider/profile.webp",
      name: "Sébastien Borget",
      designation: "COO & Co-Founder - The Sandbox",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <div className={Style.wrapper}>
      <div className={Style.head}>Supported by industry leaders</div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          loop: true,
        }}
        loop
        autoplay={{ delay: 2000 }}
        onSlideChange={handleSlideChange}
      >
        {contentData.map((content, index) => (
          <SwiperSlide key={index}>
            <div className={Style.container}>
              <div className={Style.contentContainer}>
                <div className={Style.description}>
                  <p>{content.description}</p>
                </div>

                <div className={Style.mainBottomContent}>
                  <section className={Style.bottomContent}>
                  <div className={Style.logo}>
                    <Img src={content.imagesrc1} />
                  </div>

                  <div className={Style.name_designation}>
                    <div>
                      <h1>{content.name}</h1>
                      <p>{content.designation}</p>
                    </div>
                  </div>
                  </section>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pagination-dotsemployee">
        {contentData.map((_, index) => (
          <div
            key={index}
            className={`dotemployee ${index === activeSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
