import React, {useState} from "react";
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import Style from "./index.module.css";
import ProductExp from "../../components/ProductEndExplaner";
import MapComponent from "./mapcomponent";
import Img from "../../components/Image";
import Carousel from "./CarouselComponent/Carousel";
import Blobs from "../../molecules/blobs";
import ModalForm from "../Form";

let Contact = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
    // You can add your API call or other submission logic here

    // Close the modal after submission
    closeModal();
  };

  return (
    <div className={Style.maindivcontactspage}>
      <Blobs left={"85%"} top={"0%"} color="yellow"></Blobs>
      <Blobs left={"-10%"} top={"10%"} ></Blobs>


      <section className={Style.topcont1}>
        <div id={Style.contacthead}>
          <h1>Hola,how can we help?</h1>
          <p>
            Ready to transform your enterprise with digital
            transformation-as-a-service? Get in touch with our expert team today
            and embark on a journey towards unparalleled innovation and success.
          </p>
          {/* <h2>Get in Touch</h2> */}
          <button className={Style.btn_touch} onClick={openModal}>Get in Touch</button>
          <ModalForm
          isOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        formData={formData}
          />
          <div className={Style.botconthead}>
          <div>
            <h1>Ready To Help, across borders !</h1>
          </div>
        </div>
        </div>
      </section>

      <section className={Style.botcont}>
        {/* <div className={Style.botconthead}>
          <div>
            <h1>Ready To Help, across borders !</h1>
          </div>
        </div> */}

        <div id={Style.mapcont}>

          <div className={Style.MapMain}><MapComponent /></div>

          <div className={Style.mapcontlocations}>
            <div className={Style.maplocationshead}>Our Locations</div>
            
            <div className={Style.mapcontent1}>
              <div className={Style.mapcontent1section1}>
                <Img src={"/aidtaasImages/images/images/contact/location pin.png"} />
              </div>
              <div className={Style.mapcontent1section2}>
                <div className={Style.section2head}>USA</div>
                <div className={Style.section2desc}>
                  1968 S Coast Hwy, Suite 5011, Laguna Beach, CA 92651, United States
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo}>
                    <Img src={"/aidtaasImages/images/images/contact/phone.png"} />
                  </div>
                  <div className={Style.num}>+1 1800 123 1234</div>
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo.envelope}>
                    <Img src={"/aidtaasImages/images/images/contact/envelope.png"} />
                  </div>
                  <div>usaoffice@mobiusplatforms.com</div>
                </div>
              </div>
            </div>

            <section className={Style.horizontalLineMain}>
              <div className={Style.horizontalLine}></div>
            </section>

            <div className={Style.mapcontent1}>
              <div className={Style.mapcontent1section1}>
                <Img src={"/aidtaasImages/images/images/contact/location pin.png"} />
              </div>
              <div className={Style.mapcontent1section2}>
                <div className={Style.section2head}>India</div>
                <div className={Style.section2desc}>
                5th Floor, NAVAYUGA VIZVA, GachiBowli, Hyderabad 500032.
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo}>
                    <Img src={"/aidtaasImages/images/images/contact/phone.png"} />
                  </div>
                  <div className={Style.num}>+1 1800 123 1234</div>
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo.envelope}>
                    <Img src={"/aidtaasImages/images/images/contact/envelope.png"} />
                  </div>
                  <div>info@mobiusplatforms.com</div>
                </div>
              </div>
            </div>

            <section className={Style.horizontalLineMain}>
              <div className={Style.horizontalLine}></div>
            </section>


            <div className={Style.mapcontent1}>
              <div className={Style.mapcontent1section1}>
                <Img src={"/aidtaasImages/images/images/contact/location pin.png"} />
              </div>
              <div className={Style.mapcontent1section2}>
                <div className={Style.section2head}>Singapore</div>
                <div className={Style.section2desc}>
                 11 Woodlands Close #07-13, Woodlands 11, Singapore(737853)
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo}>
                    <Img src={"/aidtaasImages/images/images/contact/phone.png"} />
                  </div>
                  <div className={Style.num}>+1 1800 123 1234</div>
                </div>
                <div className={Style.section2bottom}>
                  <div className={Style.logo.envelope}>
                    <Img src={"/aidtaasImages/images/images/contact/envelope.png"} />
                  </div>
                  <div>usaoffice@mobiusplatforms.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={Style.CarouselMain}><Carousel></Carousel></div>

      {/* <section className={Style.topcont1}> */}
      <ProductExp
        heading={"Your Trusted Digital Transformation Partner"}
        content={
          "Get in touch with our expert team to understand how Mobius Platform can accelerate your digital transformation journey"
        }
        btn={"Contact Us"}
      ></ProductExp>
      {/* </section> */}
    </div>
  );
};

export default Contact;
