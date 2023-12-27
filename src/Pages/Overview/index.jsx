import Style from "./index.module.css";
import Img from "../../components/Image";
// import Years from "../../components/YearsComponent"
import Values from "../../components/OurValues";
// import LeaderShip from "../../components/LeaderShip"
import Awards from "../../components/AwardsRec";
import ProductExp from "../../components/ProductEndExplaner";
import BuildWord from "../../components/BuildWorld";
import Foudersmessage from "./Founderscomponent";
import Lifeblog from "../careers/lifeblogpage";
import Blobs from "../../molecules/blobs";
let Overview = () => {
  return (
    <section className={Style.bg}>
      <Blobs left={"85%"} top={"15%"}></Blobs>
      <Blobs left={"-10%"} top={"95%"}></Blobs>

      <Blobs left={"85%"} top={"195%"}></Blobs>

      <Blobs left={"-10%"} top={"280%"}></Blobs>

      <div className={Style.pink_blob_1}>
        <div className={Style.pink_blob_2}>
          <section className={Style.bgmain}>
            <div className={Style.blue_blob}>
              {/* <Img src={"/images/overview/2.png"} className={Style.imagefolder} style={{position:"absolute",right:0,zIndex:0}}></Img> */}
              <div className={Style.contentsmain}>
                {/* <Img
                  src={"/aidtaasImages/images/images/overview/2.png"}
                  className={Style.imagefolder}
                ></Img> */}
                <div>
                  <div>
                    {" "}
                    <h1 className={Style.heading}>
                      The only problems worth solving are the really big ones !
                    </h1>
                  </div>
                  <div>
                    <h2 className={Style.content}>
                      {" "}
                      Mobius Networks is a leading deep tech company at the
                      vanguard of digital transformation, specializing in NoCode
                      solutions that empower businesses and organizations to
                      tackle the world's most formidable challenges. Our mission
                      is to democratize technology, enabling anyone to harness
                      the full potential of digital innovation, regardless of
                      their technical background.
                    </h2>
                  </div>

                  {/* <Years></Years> */}
                  <div className={Style.yearscontainer}>
                    <div className="upper_container">
                      <div className={Style.yearsfoldermain}>
                        <div>18</div>
                        <div>
                          Glorious years <br />
                          and Counting
                        </div>
                      </div>

                      <div className={Style.yearsfoldermain}>
                        <div>300 +</div>
                        <div>
                          Talented <br />
                          Minds
                        </div>
                      </div>
                    </div>

                    <div className="lower_container">
                      <div className={Style.yearsfoldermain}>
                        <div>24</div>
                        <div>
                          Patents <br />
                          in Process
                        </div>
                      </div>

                      <div className={Style.yearsfoldermain}>
                        <div>6 +</div>
                        <div>
                          years of Average
                          <br /> Customer Loyalty
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            style={{ position: "relative" }}
            className={Style.bottomsection}
          >
            {/* <div style={{marginTop: "40%"}}> */}

            <Values></Values>
            {/* </div> */}

            <Awards></Awards>
            {/* <section className= {Style.Meaning} >
                        <h1 className={Style.founderheading}> 
                        Founder's Message
                        </h1>
                        <h2 className={Style.foundersubhead}>"The Courage to Dream, The Conviction to make them True"</h2>
                        <p className={Style.paracontent}>
                            In the realm where dreams take flight and faith ignites courage, miracles are woven into the fabric of belief, and love finds its embrace. At Gaian, we believe that life is a canvas of boundless opportunities, a tapestry where we paint the life we envision and craft the work of our dreams to be shared with the world. In our world, creativity is the spark that transforms mere musings into the radiant reality of tomorrow.<br/>
We find solace in the simplicity of life's small wonders, while humbly acknowledging the vastness of the universe and our place within it. Embracing our purpose, we stride confidently towards progress and fulfillment, seeking solutions to the mysteries that surround us, answers to our questions, and healing for our hearts.<br/>
With unwavering faith in the future, Gaian stands tall, empowered, and resolute. Adaptable, yet anchored by reliability, we embrace each new opportunity that comes our way. Together, we form a new race, a new breed, a new faction of dreamers and doers. Time is our ally, refining us, honing our abilities, and shaping us into the best versions of ourselves.<br/>
Welcome to Gaian, where our vision, boundless as the horizon, guides us to new horizons, making each day an ode to progress, a testament to human spirit, and a tribute to the extraordinary power of creativity, unity and purpose.<br/>
Together, we stand united, a diverse tapestry woven together by the threads of meritocracy. Our journey is defined by empowerment, innovation, and the promise of a better tomorrow.<br/>
Let us embark on this remarkable journey, for we are Gaian, ever evolving, and forever refining our legacy. <br/>

Let the brilliance of tomorrow begin today...!! 
                        </p>
                </section> */}
            <Foudersmessage></Foudersmessage>
            {/* <LeaderShip></LeaderShip> */}
            <BuildWord></BuildWord>
            <div className={Style.lifeblogcomponent}>
              <Lifeblog></Lifeblog>
            </div>
          </section>
          <ProductExp
            heading={"Your Trusted Digital Transformation Partner"}
            content={
              "Get in touch with our expert team to understand how Mobius Platform can accelerate your digital transformation journey"
            }
            btn={"Contact Us"}
          ></ProductExp>
        </div>
      </div>
    </section>
  );
};
export default Overview;
