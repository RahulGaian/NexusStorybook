import React from "react";
import "./landing.css";
// import AppSwiper from "../../components/appSwiper";
// import AndroidApps from "../../components/AndroidAppsSwiper";
// import Nexus from "./map_component/components/comp";
import videofile from "./video/people-connect-digital-wave-2022-08-05-01-43-14-utc.mp4";


const Landingpagenew = () => {
  return (
    <>
      <div className="Landing_page_Container">
      <div className="Landing_top_bg">
          <div class="video-background">
            <div className="overlaydiv"></div>
              <video
                playsinline="playsinline"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source src={videofile} type="video/mp4" />
              </video>
              <div className="bannerContentContainer">
                <h1>Nexus Connect</h1>
                <div className="bannerContentWrapper">
                  <div className="bannerContent">
                    <div>
                      <h1>Shaping the Future of Television Experiences</h1>
                    </div>
                    <div>
                      <p>
                        Nexus Connect marketplace is a dynamic ecosystem that
                        brings together industry players to create, share, and
                        monetize innovative applications and services for
                        NextGenTV. It serves as a hub for broadcasters, content
                        creators, advertisers, and technology providers to
                        collaborate and deliver immersive, interactive, and
                        personalized experiences to viewers.
                      </p>
                    </div>
                    <div className="bannerContentBtn">
                      <div>
                        <button
                          id="getStartedBtn"
                          onClick={() => {
                            window.location.href = "/comingsoon";
                          }}
                        >
                          Get Started
                        </button>
                      </div>
                      <div
                        id="learnMoreBtn"
                        onClick={() => {
                          window.location.href = "/NextGenTV_Webinar";
                        }}
                      >
                        <div>Learn More</div>{" "}
                        <div className="nexus_rightarrow">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/icons/Arrow.png"
                            }
                            alt="rightarrow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="second_bg_img-contaniner">
          <div className="second_bg_content">
            <div className="second_bg_heading">
              <h1>NextGenTV</h1>
            </div>
            <div className="second_bg_para1">
              <p>Revolutionizing Television worldwide</p>
            </div>
            <div className="second_bg_para2">
              <p>
                Welcome to NextGenTV Marketplace, the premier destination for
                broadcasters, content creators, advertisers, and technology
                providers to collaborate, innovate, and unlock the full
                potential of NextGenTV. Our marketplace offers a dynamic
                ecosystem where industry players can come together, discover
                exciting applications and services, and deliver immersive,
                interactive, and personalized television experiences to viewers
                worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="mobile_view_img" style={{ display: "none" }}>
          <img
            src="images/imagesnew/Nexus_connect/landingpage/side-view-woman.png"
            alt=""
          />
        </div>

        <div className="third_bg_contaniner">
          <div className="third_bg_content">
            <section className="third_bg_upper">
              <div>
                <h1>Digital Transformation</h1>
              </div>
              <div>
                <p>
                  Digital Transformation as a Service aims to accelerate and
                  simplify the digital transformation process for organizations.
                  It brings together expertise, technology, and support to help
                  businesses navigate the complexities of digital
                  transformation, seize new opportunities, and stay competitive
                  in the digital age.
                </p>
              </div>
            </section>

            <section className="third_bg_lower_horizontal">
              <div className="third_bg_left_content">
                <div className="Ark_logo">
                  <img
                    src="images/imagesnew/Nexus_connect/landingpage/ARK-multicasting.png"
                    alt="Ark_logo"
                  />
                </div>

                <div className="third_bg_lower_para1">
                  <p>
                    ARK removes the barrier of the network with the largest
                    national Broadcast Internet Network of ~300 television
                    stations converted to an internet protocol (“IP”) standard
                    known as ATSC 3.0.
                  </p>
                </div>
              </div>

              <div className="third_bg_right_content">
                <div className="mobius_logo_">
                  <img
                    src="images/imagesnew/Nexus_connect/landingpage/Mobius-white-logo.png"
                    alt=""
                  />
                  <img
                    src="images/imagesnew/Nexus_connect/landingpage/Mobius-written.png"
                    alt=""
                  />
                </div>

                <div className="third_bg_lower_para2">
                  <p>
                    Mobius removes the barrier of the platform and application
                    development with the most advanced low code AI solutions
                    through Mobius Intelligent Applications poised to
                    revolutionize Digital Transformation in the United States
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* <div><AppSwiper /></div> */}

        <div className="mobius_won_wrapper">
          <div className="mobius_won_content">
            <section className="content_nab-show">
              <img
                src="images/imagesnew/Nexus_connect/landingpage/NAB-show.png"
                alt=""
              />
            </section>

            <section className="content_text">
              <p>Mobius Won 5 Product of the Year award at NAB Show 2023</p>
            </section>

            <section className="winner_img">
              <img
                src="images/imagesnew/Nexus_connect/landingpage/2023-winner.png"
                alt=""
              />
            </section>
          </div>
        </div>

        <div className="productContentCardWrapper">
          <div className="productContentCard ">
            <div className="productContentCardImage">
              <img
                src="/images/imagesnew/Nexus_connect/landingpage/comp-wifi.png"
                alt="comp-wifi img"
              />
            </div>
            <div className="productContentCardDesc">
              <h1>Discover a World of NextGenTV Experiences</h1>
              <p>
                With NextGenTV Marketplace, viewers can explore a vast array of
                innovative applications tailored for the NextGenTV platform.
                From interactive content and enhanced viewing experiences to
                personalized recommendations and immersive storytelling, our
                marketplace brings cutting-edge applications at your fingertips.{" "}
              </p>
            </div>
          </div>

          <div className="productContentCard ">
            <div className="productContentCardImage">
              <img
                src="/images/imagesnew/Nexus_connect/landingpage/comp-tower.png"
                alt="comp-tower img"
              />
            </div>
            <div className="productContentCardDesc">
              <h1>Monetize Your NextGenTV Offerings</h1>
              <p>
                At NextGenTV Marketplace, we believe in empowering content
                creators and application developers to monetize their offerings.
                Our platform offers a variety of monetization models, including
                advertising, subscriptions, and in-app purchases, giving you the
                flexibility to choose the approach that aligns with your
                business goals. Benefit from our revenue-sharing mechanism and
                tap into the growing market of NextGenTV viewers to generate
                revenue from your innovative applications.
              </p>
            </div>
          </div>

          <div className="productContentCard ">
            <div className="productContentCardImage">
              <img
                src="images/imagesnew/Nexus_connect/landingpage/computer-img.png"
                alt="computer-img"
              />
            </div>
            <div className="productContentCardDesc">
              <h1>Drive User Engagement and Optimize Performance</h1>
              <p>
                With NextGenTV Marketplace, viewers can explore a vast array of
                innovative applications tailored for the NextGenTV platform.
                From interactive content and enhanced viewing experiences to
                personalized recommendations and immersive storytelling, our
                marketplace brings cutting-edge applications at your fingertips.{" "}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="android_swiper_heading" style={{ margin: "5%" }}>
            <h1>Our Partners</h1>
          </div>
          <div style={{ margin: "5%" }}>{/* <AndroidApps /> */}</div>
        </div>
      </div>
    </>
  );
};

export default Landingpagenew;
